// routes/auth.js
import express from 'express';
import { login, verifyOtp } from '../controllers/user.controller.js';
import storeUserInfoToDB  from '../controllers/userInfo.controller.js'

const router = express.Router();

router.post('/login', login);
router.post('/verify', verifyOtp);
router.post('/profileData' , storeUserInfoToDB)

export default router;
