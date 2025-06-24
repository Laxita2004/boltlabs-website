// loader/index.js
import authRoutes from '../routes/authRoutes.js';
import adminRoutes from '../routes/adminRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import express from 'express';
import cors from 'cors';

const loader = async (app) => {
  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);     // Public
  app.use('/api/admin', adminRoutes);   // Protected by middleware inside
  app.use('/api/user', userRoutes);     // Protected by middleware inside
};

export default loader;
