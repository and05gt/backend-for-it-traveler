import createHttpError from 'http-errors';
import {
  addPoint,
  deletePoint,
  getPoints,
  updatePoint,
} from '../services/points.js';

export const getPointsController = async (req, res) => {
  const { page, perPage } = req.params;

  const points = await getPoints({
    page,
    perPage,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found points',
    data: points,
  });
};

export const addPointController = async (req, res) => {
  const point = await addPoint(req.body);

  res.status(200).json({
    status: 200,
    message: 'Successfully added a point!',
    data: point,
  });
};

export const updatePointController = async (req, res, next) => {
  const { pointId } = req.params;

  const result = await updatePoint(pointId, req.body, { upsert: true });

  if (!result) {
    next(createHttpError(404, 'Point not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully updated a point!',
    data: result.point,
  });
};

export const deletePointController = async (req, res, next) => {
  const { pointId } = req.params;

  const point = await deletePoint(pointId);

  if (!point) {
    next(createHttpError(404, 'Point not found'));
    return;
  }

  res.status(204).send();
};
