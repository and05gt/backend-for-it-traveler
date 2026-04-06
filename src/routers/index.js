import { Router } from 'express';
import pointsRouter from './points.js';
import authRouter from './auth.js';

const router = Router();

router.use('/points', pointsRouter);
router.use('/auth', authRouter);

export default router;
