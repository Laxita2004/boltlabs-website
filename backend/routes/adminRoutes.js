// routes/adminRoutes.js
import express from 'express';
import {
  fetchDomains,
  createDomain,
  deleteDomain,
  fetchMembers,
  deleteMember,
  createMember,
  fetchRequests,
  respondToRequest,
  fetchServices
} from '../controllers/adminController.js';

import {
  authenticateUser,
  authorizeRoles
} from '../middlewares/authMiddleware.js';

const router = express.Router();

// ✅ Apply middleware to all admin routes
router.use(authenticateUser, authorizeRoles('admin'));

// 🌐 Domain Routes
router.get('/domains', fetchDomains);
router.post('/domains', createDomain);
router.delete('/domains/:domain_id', deleteDomain);

// 👥 Member Routes
router.get('/members', fetchMembers);
router.post('/members', createMember);
router.delete('/members/:member_id', deleteMember);

// 📩 Request Handling Routes
router.get('/requests', fetchRequests);
router.post('/requests/:req_id/respond', respondToRequest);

// 🧩 Service Routes
router.get('/services', fetchServices);

export default router;
