import express from 'express'
import assignTask from '../controllers/admin.controller.js'

const router = express.Router();

router.post('/assign-task' , assignTask);

export default router;