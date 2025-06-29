import express from 'express';
import * as teamMemberController from '../controllers/teamMemberController.js';
// import { authenticateTeamMember } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Assigned Tasks API
router.get('/tasks/current', authenticateTeamMember, teamMemberController.getCurrentTasks);

// Task History API
router.get('/tasks/history', authenticateTeamMember, teamMemberController.getTaskHistory);

// Task Status Overview API
router.get('/tasks/stats', authenticateTeamMember, teamMemberController.getTaskStats);

export default router; 