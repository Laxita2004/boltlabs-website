// loaders/index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/userRoutes.js';

dotenv.config();

export default async function loader(app) {
  // Middlewares
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/user', userRoutes);

  // You can add more loaders here in the future (e.g., DB, jobs, etc.)
  console.log('✅ All loaders initialized');
}
