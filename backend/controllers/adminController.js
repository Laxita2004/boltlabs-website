

import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcryptjs'; // For password hashing
// 1. Fetch Domains
export const fetchDomains = async (req, res) => {
  try {
    const domains = await prisma.domain.findMany({
      include: {
        members: {
          include: {
            member: true
          }
        },
        services: true,
        serviceRequests: true
      }
    });
    res.json(domains);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch domains', details: err.message });
  }
};

// 2. Create Domain
export const createDomain = async (req, res) => {
  const { name } = req.body;
  
  try {
    const domain = await prisma.domain.create({
      data: { name }
    });
    res.status(201).json(domain);
  } catch (err) {
    if (err.code === 'P2002') {
      res.status(400).json({ error: 'Domain name already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create domain', details: err.message });
    }
  }
};

// 3. Delete Domain
export const deleteDomain = async (req, res) => {
  const { domain_id } = req.params;
  
  try {
    await prisma.domain.delete({
      where: { domain_id }
    });
    res.json({ message: 'Domain deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete domain', details: err.message });
  }
};

// 4. Fetch Members
export const fetchMembers = async (req, res) => {
  try {
    const members = await prisma.member.findMany({
      include: {
        domains: {
          include: {
            domain: true
          }
        },
        services: {
          include: {
            service: true
          }
        }
      }
    });
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members', details: err.message });
  }
};

// 5. Delete Members
export const deleteMember = async (req, res) => {
  const { member_id } = req.params;
  
  try {
    await prisma.member.delete({
      where: { member_id }
    });
    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete member', details: err.message });
  }
};

// 6. Create Members
export const createMember = async (req, res) => {
  const { name, email, password, domain_ids } = req.body;
  
  try {
    // Check if domains exist
    const existingDomains = await prisma.domain.findMany({
      where: { domain_id: { in: domain_ids } }
    });

    if (existingDomains.length !== domain_ids.length) {
      return res.status(400).json({ error: 'One or more domains not found' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const member = await prisma.member.create({
      data: {
        name,
        email,
        password: hashedPassword,
        domains: {
          create: domain_ids.map(domain_id => ({
            domain: { connect: { domain_id } }
          }))
        }
      },
      include: {
        domains: {
          include: {
            domain: true
          }
        }
      }
    });
    
    res.status(201).json(member);
  } catch (err) {
    if (err.code === 'P2002') {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ 
        error: 'Failed to create member', 
        details: err.message 
      });
    }
  }
};
// 7. Fetch Requests
export const fetchRequests = async (req, res) => {
  try {
    const requests = await prisma.serviceRequest.findMany({
      include: {
        user: true,
        domain: true
      },
      orderBy: { request_date: 'desc' }
    });
    
    console.log('Found requests in database:', requests.length);
    console.log('Request statuses:', requests.map(r => ({ id: r.req_id, status: r.status })));
    
    res.json({ requests: requests });
  } catch (err) {
    console.error('Fetch requests error:', err);
    res.status(500).json({ error: 'Failed to fetch requests', details: err.message });
  }
};

// 8. Post Response to Request
export const respondToRequest = async (req, res) => {
  const { req_id } = req.params;
  const { status } = req.body;
  
  console.log('Responding to request:', req_id, 'with status:', status);
  
  try {
    // First, get the request details
    const serviceRequest = await prisma.serviceRequest.findUnique({
      where: { req_id },
      include: {
        user: true,
        domain: {
          include: {
            members: {
              include: {
                member: true
              }
            }
          }
        }
      }
    });
    
    if (!serviceRequest) {
      console.log('Request not found:', req_id);
      return res.status(404).json({ error: 'Request not found' });
    }
    
    console.log('Found service request:', serviceRequest.req_id);
    
    // Update the request status instead of deleting
    const updatedRequest = await prisma.serviceRequest.update({
      where: { req_id },
      data: { status: status },
      include: {
        user: true,
        domain: true
      }
    });
    
    console.log('Request status updated to:', status);
    
    // If approved, also create a service
    if (status === 'approved') {
      console.log('Approving request and creating service...');
      const service = await prisma.service.create({
        data: {
          user_id: serviceRequest.user_id,
          domain_id: serviceRequest.domain_id,
          service: serviceRequest.service
        }
      });
      
      console.log('Service created:', service.service_id);
      
      return res.json({
        message: 'Request approved and service created',
        service,
        request: updatedRequest
      });
    } else {
      console.log('Request rejected');
      
      return res.json({ 
        message: 'Request rejected',
        request: updatedRequest
      });
    }
  } catch (err) {
    console.error('Respond to request error:', err);
    res.status(500).json({ error: 'Failed to process request', details: err.message });
  }
};

// 9. Fetch Services with Status and Domain
export const fetchServices = async (req, res) => {
  const { status, domain_id } = req.query;
  
  try {
    const whereClause = {};
    
    if (domain_id) {
      whereClause.domain_id = domain_id;
    }
    
    if (status) {
      whereClause.members = {
        some: {
          status: status.toUpperCase() // Convert to match your enum
        }
      };
    }
    
    const services = await prisma.service.findMany({
      where: whereClause,
      include: {
        user: true,
        domain: true,
        members: {
          include: {
            member: true
          }
        },
        payments: true
      }
    });
    
    res.json({ services });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch services', details: err.message });
  }
};




  