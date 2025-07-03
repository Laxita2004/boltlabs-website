import express from 'express';
import * as teamMemberController from '../controllers/teamMemberController.js';
// import { authenticateTeamMember } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Assigned Tasks API
router.get('/tasks/current', teamMemberController.getCurrentTasks);

// Task History API
router.get('/tasks/history', teamMemberController.getTaskHistory);

// Task Status Overview API
router.get('/tasks/stats', teamMemberController.getTaskStats);

export default router; 