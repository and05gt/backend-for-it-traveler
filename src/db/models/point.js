import { model, Schema } from 'mongoose';

const pointsSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PointsCollection = model('points', pointsSchema);
