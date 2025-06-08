// // import express from 'express';
// // import { getDomainMembers, getMemberProfile } from '../controllers/teamController';

// // const router = express.Router();

// // // GET /api/team/:domain - Get all members for a domain
// // router.get('/:domain', getDomainMembers);

// // // GET /api/team/:domain/:memberId - Get specific member details
// // router.get('/:domain/:memberId', getMemberProfile);

// // export default router;

// import express from 'express';
// import { getDomainMembers, getMemberProfile } from '../controllers/teamController.js';

// const router = express.Router();

// router.get('/:domain', getDomainMembers);
// router.get('/:domain/:memberId', getMemberProfile);

// export default router;

import express from 'express';
import {
  getDomainMembers,
  getMemberProfile,
  createTeamMember
} from '../controllers/teamController.js';

const router = express.Router();

// GET /api/team/:domain
router.get('/:domain', getDomainMembers);

// GET /api/team/:domain/:memberId
router.get('/:domain/:memberId', getMemberProfile);

// POST /api/team
router.post('/', createTeamMember);

export default router;