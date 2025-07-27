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

// ✅ Public routes
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

// ✅ Make fetchDomains and fetchMembers public
router.get("/domains", fetchDomains);
router.get("/members", fetchMembers);
router.get("/members/:member_id", fetchMemberById);
router.get("/domains/:domain_id/members", fetchDomainMembers);


// 🔒 Protect all routes below with admin auth
router.use(authenticateUser, authorizeRoles("admin"));

// Domain routes (admin-protected)
router.post("/domains", createDomain);
router.delete("/domains/:domain_id", deleteDomain);

// Member routes (admin-protected)
router.post("/members", createMember);
router.delete("/members/:member_id", deleteMember);

// Service request routes
router.get("/requests", fetchRequests);
router.post("/requests/:req_id/respond", respondToRequest);

// Service routes
router.get("/services", fetchServices);

// Client Routes
router.post("/clients", createClient);

// Admin Profile Routes
router.get("/profile", getProfile);
router.put("/profile", updateProfile);

// Admin Password Route
router.put("/password", updateAdminPassword);

export default router;
