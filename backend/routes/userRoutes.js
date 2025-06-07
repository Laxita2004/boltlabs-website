import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';

const router = express.Router();

// @route   GET /api/users
// @desc    Get all users
router.get('/', getAllUsers);

// @route   POST /api/users
// @desc    Create a new user
router.post('/', createUser);

export default router;
