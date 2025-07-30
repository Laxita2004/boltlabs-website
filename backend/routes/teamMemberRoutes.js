import express from "express";
import * as teamMemberController from "../controllers/teamMemberController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Assigned Tasks API
router.get(
  "/tasks/current",
  authenticateUser,
  teamMemberController.getCurrentTasks
);

// Task History API
router.get(
  "/tasks/history",
  authenticateUser,
  teamMemberController.getTaskHistory
);

// Task Status Overview API
router.get(
  "/tasks/stats",
  authenticateUser,
  teamMemberController.getTaskStats
);

export default router;
