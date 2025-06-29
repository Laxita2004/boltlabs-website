<<<<<<< HEAD
=======
// routes/adminRoutes.js
>>>>>>> c18f84fe5241ca65adbbc07944d1a22ef883151c
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

<<<<<<< HEAD
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
=======
// ✅ Apply middleware to all admin routes
router.use(authenticateUser, authorizeRoles('admin'));
>>>>>>> c18f84fe5241ca65adbbc07944d1a22ef883151c

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

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> c18f84fe5241ca65adbbc07944d1a22ef883151c
