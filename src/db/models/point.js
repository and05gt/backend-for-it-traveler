import { model, Schema } from 'mongoose';

const pointsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String },
    coordinates: { type: Array, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const PointsCollection = model('points', pointsSchema);
