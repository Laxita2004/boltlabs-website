import express from "express";
import {
  createUser,
  getUserById,
  getPreviousRequests,
} from "../controllers/userController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js"; // ✅ fixed import

const router = express.Router();

router.post("/register", createUser); // no token required
router.get("/:id", authenticateUser, getUserById); // ✅ token protected
router.get("/requests/previous", authenticateUser, getPreviousRequests);

export default router;
