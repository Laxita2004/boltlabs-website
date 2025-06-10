import express from 'express';
import { body, validationResult } from 'express-validator';
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

// POST /api/contact
router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').trim().isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array()
      });
    }
    next();
  },
  submitContact
);

export default router;
