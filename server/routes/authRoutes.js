// routes/auth.js
import express from 'express';
import { login, verifyOtp } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/verify', verifyOtp);

export default router;
