import express from "express";
import {
  createUser,
  getUserById,
  getPreviousRequests,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/:id", getUserById);
router.get("/requests/previous", getPreviousRequests);

export default router;
