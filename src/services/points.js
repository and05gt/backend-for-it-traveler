import { PointsCollection } from '../db/models/point.js';

export const getPoints = async () => {
  const points = await PointsCollection.find();
  return points;
};
