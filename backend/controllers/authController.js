import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma.js";
import { generateToken } from "../utils/jwt.js";
import { sendResetMail } from "../utils/mailer.js"; // your nodemailer logic
import jwt from "jsonwebtoken";

// 🔐 Signup – Only for Users
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const token = generateToken({ id: newUser.user_id, role: "user" });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token,
        role: "user",
      },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Signup failed", details: err.message });
  }
};

// 🔑 Login – All Roles
export const login = async (req, res) => {
  const { email, password, role } = req.body;
  console.log(email, password, role); // Debugging line to check input values

  try {
    let user, idKey;

    if (role === "user") {
      user = await prisma.user.findUnique({ where: { email } });
      idKey = "user_id";
    } else if (role === "admin") {
      user = await prisma.admin.findUnique({ where: { email } });
      idKey = "admin_id";
    } else if (role === "member") {
      user = await prisma.member.findUnique({ where: { email } });
      idKey = "member_id";
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }
    console.log("Fetched user from DB:", user);
    if (user) {
      console.log("DB hash:", user.password);
      console.log("Entered password:", password);
      const isValid = await bcrypt.compare(password, user.password);
      console.log("Password valid?", isValid);
    }

    if (!user) return res.status(404).json({ error: "User not found" });
    // console.log(user); // Debugging line to check user object

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: "Invalid credentials" });

    const token = generateToken({ id: user[idKey], role });

    res.json({
      token,
      role, // ✅ Added role to the response
      firstLogin: user.firstLogin || false,
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
};

// 📧 Forgot Password – Send Reset Link
export const forgotPassword = async (req, res) => {
  const { email, role } = req.body;

  try {
    let model;
    if (role === "user") model = prisma.user;
    else if (role === "admin") model = prisma.admin;
    else if (role === "member") model = prisma.member;
    else return res.status(400).json({ error: "Invalid role" });

    const user = await model.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "User not found" });

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    await sendResetMail(email, token); // custom mailer function
    res.json({ message: "Reset link sent to email" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to send reset link", details: err.message });
  }
};

// 🔄 Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, role } = decoded;

    let model;
    if (role === "user") model = prisma.user;
    else if (role === "admin") model = prisma.admin;
    else if (role === "member") model = prisma.member;

    const hashed = await bcrypt.hash(newPassword, 10);
    await model.update({
      where: { email },
      data: { password: hashed, firstLogin: false },
    });

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid or expired token" });
  }
};

// 🧩 Member Password Change (On First Login)
export const changePassword = async (req, res) => {
  const { member_id } = req.user; // from JWT middleware
  const { newPassword } = req.body;

  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.member.update({
      where: { member_id },
      data: { password: hashed, firstLogin: false },
    });
    res.json({ message: "Password changed successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Password update failed", details: err.message });
  }
};
