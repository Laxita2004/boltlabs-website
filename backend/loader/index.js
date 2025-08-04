// loader/index.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load env variables
dotenv.config();

// Import route files
import adminRoutes from '../routes/adminRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import teamMemberRoutes from '../routes/teamMemberRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import contactRoutes from "../routes/contact.js";

const loader = async (app) => {
  // Configure CORS to allow requests from frontend
 
  app.use(express.json());
  app.use(morgan('dev'));

  // Auth Routes – No authentication required
  app.use('/api/auth', authRoutes);

  // Protected Routes – Login required
  app.use('/api/admin', adminRoutes);
  app.use('/api/member', teamMemberRoutes);
  app.use('/api/user', userRoutes);
  app.use("/api", contactRoutes);

  // 404 Handler
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
};

export default loader;