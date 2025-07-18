import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const createTestData = async () => {
  try {
    console.log('🌱 Starting to seed test data...');

    // Create test domains
    const domains = await Promise.all([
      prisma.domain.upsert({
        where: { name: 'Web Development' },
        update: {},
        create: { name: 'Web Development' }
      }),
      prisma.domain.upsert({
        where: { name: 'Mobile Development' },
        update: {},
        create: { name: 'Mobile Development' }
      }),
      prisma.domain.upsert({
        where: { name: 'API Integration' },
        update: {},
        create: { name: 'API Integration' }
      }),
      prisma.domain.upsert({
        where: { name: 'Database Design' },
        update: {},
        create: { name: 'Database Design' }
      }),
      prisma.domain.upsert({
        where: { name: 'Cloud Services' },
        update: {},
        create: { name: 'Cloud Services' }
      })
    ]);

    console.log('✅ Domains created:', domains.map(d => d.name));

    // Create test user
    const hashedUserPassword = await bcrypt.hash('user123', 10);
    const testUser = await prisma.user.upsert({
      where: { email: 'user@example.com' },
      update: {},
      create: {
        name: 'Test User',
        email: 'user@example.com',
        password: hashedUserPassword
      }
    });

    console.log('✅ Test user created:', testUser.email);

    // Create test admin
    const hashedAdminPassword = await bcrypt.hash('admin123', 10);
    const testAdmin = await prisma.admin.upsert({
      where: { email: 'admin@example.com' },
      update: {},
      create: {
        name: 'Test Admin',
        email: 'admin@example.com',
        password: hashedAdminPassword
      }
    });

    console.log('✅ Test admin created:', testAdmin.email);

    // Create test member
    const hashedMemberPassword = await bcrypt.hash('member123', 10);
    const testMember = await prisma.member.upsert({
      where: { email: 'member@example.com' },
      update: {},
      create: {
        name: 'Test Member',
        email: 'member@example.com',
        password: hashedMemberPassword,
        firstLogin: false
      }
    });

    console.log('✅ Test member created:', testMember.email);

    // Create some sample service requests
    const sampleRequests = await Promise.all([
      prisma.serviceRequest.create({
        data: {
          user_id: testUser.user_id,
          service: 'Website Redesign',
          domain_id: domains[0].domain_id // Web Development
        }
      }),
      prisma.serviceRequest.create({
        data: {
          user_id: testUser.user_id,
          service: 'Mobile App Development',
          domain_id: domains[1].domain_id // Mobile Development
        }
      })
    ]);

    console.log('✅ Sample service requests created:', sampleRequests.length);

    console.log('\n🎉 Test data seeding completed successfully!');
    console.log('\n📋 Test Credentials:');
    console.log('👤 User: user@example.com / user123');
    console.log('👨‍💼 Admin: admin@example.com / admin123');
    console.log('👥 Member: member@example.com / member123');

  } catch (error) {
    console.error('❌ Error seeding test data:', error);
  } finally {
    await prisma.$disconnect();
  }
};

createTestData(); 