// loader/index.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

// Import route files
import adminRoutes from '../routes/adminRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import teamMemberRoutes from '../routes/teamMemberRoutes.js';
import userRoutes from '../routes/userRoutes.js';

const loader = async (app) => {
  // Configure CORS to allow requests from frontend
  app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
  }));
  app.use(express.json());
  app.use(morgan('dev'));

  // Auth Routes – No authentication required
  app.use('/api/auth', authRoutes);

  // Protected Routes – Login required
  app.use('/api/admin', adminRoutes);
  app.use('/api/member', teamMemberRoutes);
  app.use('/api/users', userRoutes);

  // 404 Handler
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
};

export default loader;
