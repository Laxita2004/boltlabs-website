import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import { generateToken } from '../utils/jwt.js';
import { sendResetMail } from '../utils/mailer.js'; // your nodemailer logic
import jwt from 'jsonwebtoken';

// 🔐 Signup – Only for Users
export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ success: false, error: 'Email already in use' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    });

    const token = generateToken({ id: user.user_id, role: 'user' });
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        token,
        user: {
          id: user.user_id,
          name: user.name,
          email: user.email
        }
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: 'Signup failed', details: err.message });
  }
};


// 🔑 Login – All Roles
// 🔑 Login – All Roles
export const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user, idKey, payload;

    if (role === 'user') {
      user = await prisma.user.findUnique({ where: { email } });
      idKey = 'user_id';
      payload = { id: user?.user_id, role };
    } else if (role === 'admin') {
      user = await prisma.admin.findUnique({ where: { email } });
      idKey = 'admin_id';
      payload = { id: user?.admin_id, role };
    } else if (role === 'member') {
      user = await prisma.member.findUnique({ where: { email } });
      idKey = 'member_id';
      payload = { member_id: user?.member_id, role };
    } else {
      return res.status(400).json({ error: 'Invalid role' });
    }

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(payload);

    res.json({
      token,
      role,
      firstLogin: user.firstLogin || false,
      user: {
        id: user[idKey],
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Login failed', details: err.message });
  }
};

// 📧 Forgot Password – Send Reset Link
export const forgotPassword = async (req, res) => {
  const { email, role } = req.body;

  try {
    let model;
    if (role === 'user') model = prisma.user;
    else if (role === 'admin') model = prisma.admin;
    else if (role === 'member') model = prisma.member;
    else return res.status(400).json({ error: 'Invalid role' });

    const user = await model.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET, { expiresIn: '15m' });

    await sendResetMail(email, token); // custom mailer function
    res.json({ message: 'Reset link sent to email' });

  } catch (err) {
    res.status(500).json({ error: 'Failed to send reset link', details: err.message });
  }
};

// 🔄 Reset Password
export const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email, role } = decoded;

    let model;
    if (role === 'user') model = prisma.user;
    else if (role === 'admin') model = prisma.admin;
    else if (role === 'member') model = prisma.member;

    const hashed = await bcrypt.hash(newPassword, 10);
    await model.update({ where: { email }, data: { password: hashed, firstLogin: false } });

    res.json({ message: 'Password updated successfully' });

  } catch (err) {
    res.status(400).json({ error: 'Invalid or expired token' });
  }
};

// 🧩 Member Password Change (On First Login)
export const changePassword = async (req, res) => {
  const member_id = req.user.id; // ✅ corrected
  const { newPassword } = req.body;

  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await prisma.member.update({
      where: { member_id },
      data: { password: hashed, firstLogin: false }
    });
    res.json({ message: 'Password changed successfully' });

  } catch (err) {
    console.error('Change password error:', err);
    res.status(500).json({ error: 'Password update failed', details: err.message });
  }
};
