import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { supabase } from '../config/supabaseClient.js';

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res
      .status(400)
      .json({ error: "User creation failed", detail: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  console.log("📥 Getting user with ID:", id); // Add this log

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
  console.error("❌ Error in getUserById:", error); // This logs the actual error object
  res.status(500).json({ error: 'Failed to fetch user', detail: error.message });
}
};


export const getPreviousRequests = async (req, res) => {
  try {
    const requests = await prisma.serviceRequest.findMany({
      orderBy: { request_date: "desc" },
      take: 10,
      include: {
        user: true,
        domain: true,
      },
    });

    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch requests", detail: error });
  }
};
