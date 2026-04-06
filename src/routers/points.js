import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getPointsController } from '../controllers/points.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getPointsController));

export default router;
