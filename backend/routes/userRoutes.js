// routes/userRoutes.js
import express from "express";
import {
  createUser,
  getUserById,
  getPreviousRequests,
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Apply authentication for all routes in this file
router.use(authenticateUser, authorizeRoles('user'));

// 👤 Routes
router.post("/register", createUser);
router.get("/:id", getUserById);
router.get("/requests/previous", getPreviousRequests);

// 🔧 Optional test route
router.get("/test", (req, res) => {
  res.json({ message: "✅ User route is working" });
});

export default router;
