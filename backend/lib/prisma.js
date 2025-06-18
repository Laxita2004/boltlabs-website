// lib/prisma.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: helpful during dev
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
