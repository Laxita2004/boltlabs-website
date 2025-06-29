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
import { authenticate, authorizeAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Public test endpoints (no auth required)
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

// Apply admin auth middleware to all routes except test and health
router.use('/test', (req, res, next) => next());
router.use('/health', (req, res, next) => next());
router.use(authenticate, authorizeAdmin);

// Domain routes
router.get('/domains', fetchDomains);
router.post('/domains', createDomain);
router.delete('/domains/:domain_id', deleteDomain);

// Member routes
router.get('/members', fetchMembers);
router.post('/members', createMember);
router.delete('/members/:member_id', deleteMember);

// Request routes
router.get('/requests', fetchRequests);
router.post('/requests/:req_id/respond', respondToRequest);

// Service routes
router.get('/services', fetchServices);

export default router;