// import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { prisma } from '../lib/prisma.js';
// const prisma = new PrismaClient();

// 👤 Get User By ID (for dashboard / profile)
export const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log("📥 Getting user with ID:", id);

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: id },
      include: {
        services: true,
        serviceRequests: true,
      },
    });

    if (!user) {
      console.log("⚠️ User not found.");
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("✅ User found:", user);
    res.json(user);
  } catch (error) {
    console.error("❌ Error in getUserById:", error);
    res.status(500).json({ error: 'Failed to fetch user', detail: error.message });
  }
};

// ✏️ Update User Profile
export const updateProfile = async (req, res) => {
  const { id: user_id, role } = req.user;
  const { name, email, phone } = req.body;

  if (role !== 'user') {
    return res.status(403).json({ error: "Only users can update profile." });
  }

  if (!name && !email && !phone) {
    return res.status(400).json({ error: "Nothing to update." });
  }

  console.log(`🔍 Updating user profile for user_id=${user_id}, data=`, { name, email, phone });

  try {
    const updatedUser = await prisma.user.update({
      where: { user_id },
      data: { name, email, phone },
    });

    const { password, ...userWithoutPassword } = updatedUser;
    res.json(userWithoutPassword);

  } catch (error) {
    console.error("Update profile error:", error);
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return res.status(400).json({ error: "Email already exists." });
    }
    res.status(500).json({ error: "Failed to update profile.", details: error.message });
  }
};


// 🔑 Update Password
export const updatePassword = async (req, res) => {
  const { id, role } = req.user;
  const { currentPassword, newPassword } = req.body;

  console.log("🔍 updatePassword req.user:", req.user);
  console.log("🔍 updatePassword body:", { currentPassword, newPassword });

  if (role !== 'user') {
    return res.status(403).json({ error: "Only users can update password." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { user_id: id }
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const valid = await bcrypt.compare(currentPassword, user.password);
    if (!valid) {
      return res.status(401).json({ error: "Current password is incorrect." });
    }

    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { user_id: id },
      data: { password: hashed }
    });

    res.json({ message: "Password updated successfully" });

  } catch (err) {
    console.error("Update password error:", err);
    res.status(500).json({ error: "Failed to update password.", details: err.message });
  }
};


// 🌐 Get Domains List
export const getDomains = async (req, res) => {
  try {
    const domains = await prisma.domain.findMany({
      select: {
        domain_id: true,
        name: true
      }
    });
    res.json(domains);
  } catch (error) {
    console.error('Get domains error:', error);
    res.status(500).json({ error: 'Failed to fetch domains', detail: error.message });
  }
};

// 📝 Create Service Request
export const createServiceRequest = async (req, res) => {
  try {
    const { service, domain_id } = req.body;
    const user_id = req.user?.id; // ✅ fixed

    if (!service || !domain_id) {
      return res.status(400).json({ error: 'Missing service or domain_id' });
    }

    if (!user_id) {
      return res.status(401).json({ error: 'Unauthorized: no user_id found' });
    }

    const domain = await prisma.domain.findUnique({
      where: { domain_id }
    });

    if (!domain) {
      return res.status(404).json({ error: 'Domain not found' });
    }

    const serviceRequest = await prisma.serviceRequest.create({
      data: {
        user_id,
        service,
        domain_id
      },
      include: {
        user: true,
        domain: true
      }
    });

    console.log('✅ Created service request:', serviceRequest);

    return res.status(201).json({
      message: 'Service request created successfully',
      request: serviceRequest
    });

  } catch (error) {
    console.error('❌ Create service request error:', error);
    return res.status(500).json({
      error: 'Failed to create service request',
      detail: error.message
    });
  }
};


// 🕓 Get Previous Service Requests
export const getPreviousRequests = async (req, res) => {
  const user_id = req.user.id; // from auth middleware

  try {
    const requests = await prisma.serviceRequest.findMany({
      where: { user_id },
      orderBy: { request_date: "desc" },
      include: {
        user: true,
        domain: true,
      },
    });

    res.json(requests);
  } catch (error) {
    console.error("Get previous requests error:", error);
    res.status(500).json({ error: "Failed to fetch requests", detail: error.message });
  }
};