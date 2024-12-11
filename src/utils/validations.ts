import Joi from "joi";
export const userIdSchemaValidation = Joi.string().required();

export const userSchemaValidation = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required()
});
