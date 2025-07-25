import express from 'express';
import {
  fetchDomains,
  createDomain,
  deleteDomain,
  fetchMembers,
  fetchDomainMembers, // ✅ NEW
  createMember,
  deleteMember,
  fetchRequests,
  respondToRequest,
  fetchServices
} from '../controllers/adminController.js';

import {
  authenticateUser,
  authorizeRoles
} from '../middlewares/authMiddleware.js';

const router = express.Router();

// 🚀 Public routes for testing
router.get('/test', (req, res) => {
  res.json({ message: 'Admin routes are working!' });
});

router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'Backend server is running'
  });
});

// 🔐 Protect all routes below with admin auth
router.use(authenticateUser, authorizeRoles('admin'));

// 📂 Domain routes
router.get('/domains', fetchDomains);
router.post('/domains', createDomain);
router.delete('/domains/:domain_id', deleteDomain);
router.get('/domains/:domain_id/members', fetchDomainMembers); // ✅ Added

// 👥 Member routes
router.get('/members', fetchMembers);
router.post('/members', createMember);
router.delete('/members/:member_id', deleteMember);

// 📬 Service request routes
router.get('/requests', fetchRequests);
router.post('/requests/:req_id/respond', respondToRequest);

// 🛠️ Service routes
router.get('/services', fetchServices);

export default router;
