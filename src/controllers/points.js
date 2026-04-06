import { getPoints } from '../services/points.js';

export const getPointsController = async (req, res) => {
  const points = await getPoints();

  res.status(200).json({
    status: 200,
    message: 'Successfully found points',
    data: points,
  });
};
