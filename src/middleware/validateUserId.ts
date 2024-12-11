import { NextFunction, Request, Response } from "express";
import { handleResponse } from "../utils/handleResponse";
import { formatValidationError } from "../utils/helper";
import { userIdSchemaValidation } from "../utils/validations";
import LOG from "./../library/logging";

export const validateUserId = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.params;
  userIdSchemaValidation
    .validateAsync(userId, { abortEarly: false })
    .then((_value) => {
      next();
    })
    .catch((error) => {
      const errorDetails = formatValidationError(error);
      LOG.error(errorDetails);
      return handleResponse(res, 400, error.message, errorDetails);
    });
};
