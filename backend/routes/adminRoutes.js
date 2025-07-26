import express from "express";
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

// ✅ Public Domains Route (anyone can view)
router.get("/domains", fetchDomains);

// ✅ All routes below this are admin-protected
router.use(authenticateUser, authorizeRoles("admin"));

// Domain Management Routes
router.post("/domains", createDomain);
router.delete("/domains/:domain_id", deleteDomain);

// Member Routes
router.get("/members", fetchMembers);
router.post("/members", createMember);
router.delete("/members/:member_id", deleteMember);

// Request Handling
router.get("/requests", fetchRequests);
router.post("/requests/:req_id/respond", respondToRequest);

// Service Routes
router.get("/services", fetchServices);

export default router;
