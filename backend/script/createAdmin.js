import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const createAdmin = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: 'admin@boltlabs.com' }
    });

    if (existingAdmin) {
      console.log('Admin user already exists!');
      return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    const admin = await prisma.admin.create({
      data: {
        name: 'Admin User',
        email: 'admin@boltlabs.com',
        password: hashedPassword
      }
    });

    console.log('✅ Admin user created successfully!');
    console.log('Email: admin@boltlabs.com');
    console.log('Password: admin123');
    console.log('Admin ID:', admin.admin_id);

  } catch (error) {
    console.error('❌ Error creating admin:', error);
  } finally {
    await prisma.$disconnect();
  }
};

createAdmin(); 