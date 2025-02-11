import express from 'express';
import { getUserData, modifyUserData } from '@controller/userResource';
import { authMiddleware } from '@middleware/authMiddleware';

const router = express.Router();

router.get('/fetch-user-data/:id', authMiddleware, getUserData);
router.put('/update-user-data/:id', authMiddleware, modifyUserData);

export default router;
