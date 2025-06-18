import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import domainRoutes from "./routes/domainRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Supabase client
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use("/api/domains", domainRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userRoutes);
app.use('/api/admin', adminRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});

// Start server
const PORT = process.env.PORT || 5000;
<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(`✅ Supabase-powered server is running on port ${PORT}`);
});
=======
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> origin/main

