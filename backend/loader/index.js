// loader/index.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
// import authRoutes from '../routes/authRoutes.js';
// import userRoutes from '../routes/userRoutes.js';
// import adminRoutes from '../routes/adminRoutes.js';

// Load env variables
dotenv.config();

// Import route files
import adminRoutes from '../routes/adminRoutes.js';
import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import teamMemberRoutes from '../routes/teamMemberRoutes.js';

const loader = async (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(morgan('dev'));

  // Auth Routes – No authentication required
  app.use('/api/auth', authRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/admin', adminRoutes);

  // ✅ Protected Routes – Login required
  app.use('/api/admin', adminRoutes);
  app.use('/api/user', userRoutes);
  app.use('/api/member', teamMemberRoutes);

  // 404 Handler
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
  });
};

export default loader;
