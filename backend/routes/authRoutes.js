import express from 'express';
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
  changePassword
} from '../controllers/authController.js';

import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🔐 Signup – Only for 'user'
router.post('/signup', signup);

// 🔑 Login – For 'user', 'admin', 'member'
router.post('/login', login);

// 📧 Forgot password – Send email with reset link
router.post('/forgot-password', forgotPassword);

// 🔄 Reset password – Using token from email
router.post('/reset-password', resetPassword);

// 🧩 Member changing password after first login
router.post(
  '/change-password',
  protect,
  authorizeRoles('member'), // only members can use this route
  changePassword
);

export default router;
