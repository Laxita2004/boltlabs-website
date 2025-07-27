import express from "express";
import {
  fetchDomains,
  createDomain,
  deleteDomain,
  fetchMembers,
  fetchDomainMembers, 
  createMember,
  deleteMember,
  fetchRequests,
  respondToRequest,
  fetchServices,
  createClient,
  getProfile,
  updateProfile,
  updateAdminPassword,
  fetchMemberById,
} from "../controllers/adminController.js";

import {
  authenticateUser,
  authorizeRoles,
  authorizeAdmin,
} from "../middlewares/authMiddleware.js";

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

//  Protect all routes below with admin auth
router.use(authenticateUser, authorizeRoles("admin"));

//  Domain routes
router.get("/domains", fetchDomains);
router.post("/domains", createDomain);
router.delete("/domains/:domain_id", deleteDomain);
router.get("/domains/:domain_id/members", fetchDomainMembers); 

// 👥 Member routes
router.get("/members", fetchMembers);
router.post("/members", createMember);
router.delete("/members/:member_id", deleteMember);
router.get("/members/:member_id", fetchMemberById);

// Service request routes
router.get("/requests", fetchRequests);
router.post("/requests/:req_id/respond", respondToRequest);

// Service routes
router.get("/services", fetchServices);

//  Client Routes
router.post('/clients', createClient);

//  Admin Profile Routes
router.get('/profile', getProfile);
router.put('/profile', updateProfile);

//  Admin Password Route
router.put('/password', updateAdminPassword);

// All routes below this are admin-protected
router.use(authenticateUser, authorizeRoles("admin"));

export default router;
