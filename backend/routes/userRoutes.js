import express from "express";
import {
  getUserById,
  updateProfile,
  updatePassword,
  getPreviousRequests,
  createServiceRequest,
  getDomains
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authenticateUser, authorizeRoles('user'));

router.get("/domains", getDomains);
router.get("/requests/previous", getPreviousRequests);
router.post("/requests", createServiceRequest);
router.get("/:id", getUserById);
router.put("/profile", updateProfile);
router.put("/password", updatePassword);

export default router;
