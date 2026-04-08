import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addPointController,
  deletePointController,
  getPointsController,
  updatePointController,
} from '../controllers/points.js';
import { authenticate } from '../middlewares/authenticate.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createPointsSchema,
  updatePointsSchema,
} from '../validation/points.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getPointsController));

router.post(
  '/',
  validateBody(createPointsSchema),
  ctrlWrapper(addPointController),
);

router.put(
  '/:pointId',
  isValidId,
  validateBody(updatePointsSchema),
  ctrlWrapper(updatePointController),
);

router.delete('/:pointId', isValidId, ctrlWrapper(deletePointController));

export default router;
