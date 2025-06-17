<<<<<<< userapi
// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

// Route files (make sure they use Supabase inside)

import domainRoutes from "./routes/domainRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
=======
import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

import { createClient } from '@supabase/supabase-js';

// Route files (make sure they use Supabase inside)

import domainRoutes from './routes/domainRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
>>>>>>> main


dotenv.config();

const app = express();
<<<<<<< userapi

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
=======
app.use(cors());
>>>>>>> main
app.use(express.json());


// Auth routes
app.use('/api/auth', authRoutes);

// API Routes
<<<<<<< userapi
app.use("/api/domains", domainRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/user", userRoutes);
=======
app.use('/api/domains', domainRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);
>>>>>>> main

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
