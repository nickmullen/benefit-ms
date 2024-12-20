import { NextFunction, Request, Response } from "express";

import { handleResponse } from "../utils/handleResponse";
import LOG from "../library/logging";
import { CreateBenefit } from "../services/createBenefit";
import { ReadBenefit } from "../services/readBenefit";
import { NotFoundError } from "../middleware/error";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { snomed, benefitGroupId, exclusionGroupId, names } = req.body;
  new CreateBenefit(snomed, benefitGroupId, exclusionGroupId, names).save()
    .then(output => {
      return handleResponse(res, 201, "created", output);
    })
    .catch((err: any) => {
      if (err.parent.code === "ER_DUP_ENTRY") return handleResponse(res, 409, err.parent.sqlMessage || "Untrapped problem, check code", null);
      if (err instanceof Error) LOG.error(err.message, JSON.stringify(err));
      return handleResponse(res, 500, err.message, null);
    });
};

const read = (req: Request, res: Response, next: NextFunction) => {
  const snomed = req.params.snomed;
  new ReadBenefit(snomed).read()
    .then(foundBenefit => {
      return handleResponse(res, 200, "Success", { benefit: foundBenefit });
    })
    .catch((err: any) => {
      if (err instanceof Error) LOG.error(err.message);
      if (err instanceof NotFoundError) return handleResponse(res, 404, err.message);
      return handleResponse(res, 500, err.message, null);
    });
};

export default { create, read };
