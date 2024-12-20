import { NextFunction, Request, Response } from "express";

import { handleResponse } from "../utils/handleResponse";
import { ReadBenefitGroups } from "../services/readBenefitGroups";
import LOG from "../library/logging";


const read = async (req: Request, res: Response, next: NextFunction) => {

  new ReadBenefitGroups().read()
    .then(returnedArray => {
      return handleResponse(res, 200, "Success", { benefitGroups: returnedArray} );
    })
    .catch((err: any) => {
      if (err instanceof Error) LOG.error(err.message);
      LOG.error("***** %s", JSON.stringify(err));
      return handleResponse(res, 500, err.message, null);
    })
};

export default { read };
