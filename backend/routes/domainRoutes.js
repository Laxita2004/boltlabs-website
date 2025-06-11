// routes/domainRoutes.js
import express from 'express';
import { getAllDomains } from '../controllers/domainController.js';

const router = express.Router();

router.get('/', getAllDomains);

export default router;
