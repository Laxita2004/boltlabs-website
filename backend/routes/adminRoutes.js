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
  fetchServices,
} from "../controllers/adminController.js";

import {
  authenticateUser,
  authorizeRoles,
  authorizeAdmin
} from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public test endpoints (no auth required)
router.get("/test", (req, res) => {
  res.json({ message: "Admin routes are working!" });
});

router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    message: "Backend server is running",
  });
});

// 🌐 Domain Routes (protected)
router.get('/domains', authenticateUser, authorizeAdmin, fetchDomains);
router.post('/domains', authenticateUser, authorizeAdmin, createDomain);
router.delete('/domains/:domain_id', authenticateUser, authorizeAdmin, deleteDomain);

// 👥 Member Routes (protected)
router.get('/members', authenticateUser, authorizeAdmin, fetchMembers);
router.post('/members', authenticateUser, authorizeAdmin, createMember);
router.delete('/members/:member_id', authenticateUser, authorizeAdmin, deleteMember);

// 📩 Request Handling Routes (protected)
router.get('/requests', authenticateUser, authorizeAdmin, fetchRequests);
router.post('/requests/:req_id/respond', authenticateUser, authorizeAdmin, respondToRequest);

// 🧩 Service Routes (protected)
router.get('/services', authenticateUser, authorizeAdmin, fetchServices);

export default router;
