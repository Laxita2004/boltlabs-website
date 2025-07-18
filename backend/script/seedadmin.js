/**
 * backend/scripts/seedAdmin.js
 * 
 * Usage:
 *   node backend/scripts/seedAdmin.js
 * or wire it with Prisma:
 *   npx prisma db seed
 */
import dotenv from 'dotenv';
dotenv.config();
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Test Admin',
      email: 'admin@example.com',
      password: hashedPassword,
    },
  });

  console.log(`✅ Seeded admin: ${admin.email}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });
