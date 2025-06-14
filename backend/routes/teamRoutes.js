// routes/teamRoutes.js
import express from 'express';
import {
  getDomains,
  getDomainMembers,
  getMemberProfile
} from '../controllers/teamController.js';

const router = express.Router();

// Page 1: All domains
router.get('/domains', getDomains);

// Page 2: Members in a domain
router.get('/domains/:domain/members', getDomainMembers);

// Page 3: Single member details
router.get('/members/:memberId', getMemberProfile);

export default router;