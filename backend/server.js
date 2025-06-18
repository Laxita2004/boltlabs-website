import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import teamMemberRoutes from "./routes/teamMemberRoutes.js";

// Load environment variables
dotenv.config();

// Initialize Supabase client with error handling
let supabase = null;
try {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) {
    console.warn("⚠️  Supabase credentials not found. Some features may not work.");
    console.warn("   Please create a .env file with SUPABASE_URL and SUPABASE_KEY");
    console.warn("   See env-config.js for instructions");
  } else {
    supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_KEY
    );
    console.log("✅ Supabase client initialized successfully");
  }
} catch (error) {
  console.error("❌ Error initializing Supabase client:", error.message);
}

export { supabase };

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    supabase: supabase ? 'Connected' : 'Not configured'
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use("/api/user", userRoutes);
app.use('/api/admin', adminRoutes);
app.use("/api/team-member", teamMemberRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

