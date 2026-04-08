import Joi from 'joi';

export const createPointsSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().required(),
  img: Joi.string(),
  coordinates: Joi.array().required(),
});

export const updatePointsSchema = Joi.object({
  title: Joi.string().min(3).max(30),
  description: Joi.string(),
  img: Joi.string(),
  coordinates: Joi.array(),
});
