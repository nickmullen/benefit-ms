import { NextFunction, Request, Response } from "express";

import { handleResponse } from "../utils/handleResponse";
import { ReadBenefitGroups } from "../services/readBenefitGroups";
import LOG from "../library/logging";


const read = async (req: Request, res: Response, next: NextFunction) => {
  LOG.info("Attempting to fetch all benefit groups");
  try {
    const output = await new ReadBenefitGroups().read();
    LOG.debug("Returned %o", output);
    return handleResponse(res, 200, "Success", output);
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message, null);
  };
};

export default { read };
