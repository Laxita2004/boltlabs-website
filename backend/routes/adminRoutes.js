import express from 'express';
import {
  fetchDomains, createDomain, deleteDomain,
  fetchMembers, createMember, deleteMember,
  fetchRequests, respondToRequest,
  fetchServices
} from '../controllers/adminController.js';
import { isAdmin } from '../middlewares/auth.js';

const router = express.Router();

// Domain routes
router.get('/domains', isAdmin, fetchDomains);
router.post('/domains', isAdmin, createDomain);
router.delete('/domains/:id', isAdmin, deleteDomain);

// Member routes
router.get('/members', isAdmin, fetchMembers);
router.post('/members', isAdmin, createMember);
router.delete('/members/:id', isAdmin, deleteMember);

// Request routes
router.get('/requests', isAdmin, fetchRequests);
router.post('/requests/:id/respond', isAdmin, respondToRequest);

// Service routes
router.get('/services', isAdmin, fetchServices);

export default router;