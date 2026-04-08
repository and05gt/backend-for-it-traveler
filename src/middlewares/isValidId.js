import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { pointId } = req.params;
  if (!isValidObjectId(pointId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
