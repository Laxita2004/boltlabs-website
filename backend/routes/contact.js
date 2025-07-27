import express from "express";
import { sendContactEmail } from "../utils/mailer.js";
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;