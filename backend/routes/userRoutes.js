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

router.get("/test", (req, res) => {
  try {
    res.json({ message: "✅ User route is working" });
  } catch (error) {
    console.error("🔥 Test route error:", error);
    res.status(500).json({ error: "Test route crashed" });
  }
});


export default router;




