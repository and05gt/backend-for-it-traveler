import { PointsCollection } from '../db/models/point.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

export const getPoints = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const pointsQuery = PointsCollection.find();
  const pointsCount = await PointsCollection.find()
    .merge(pointsQuery)
    .countDocuments();

  const points = await pointsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(pointsCount, perPage, page);
  return {
    items: points,
    ...paginationData,
  };
};

export const addPoint = async (payload) => {
  const point = await PointsCollection.create(payload);
  return point;
};

export const updatePoint = async (pointId, payload, options = {}) => {
  const rawResult = await PointsCollection.findOneAndUpdate(
    { _id: pointId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    point: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deletePoint = async (pointId) => {
  const point = await PointsCollection.findOneAndDelete({ _id: pointId });

  return point;
};
