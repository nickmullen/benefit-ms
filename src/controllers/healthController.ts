import { NextFunction, Request, Response } from "express";
import DB from "../models";
import LOG from "../library/logging";

const healthCheck = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    status: "UP",
    uptime: process.uptime()
  });
};

const readinessCheck = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // do whatever checks you need to to ensure that you are prepared to handle live traffic
    // this could be just a db, but also validating an external service is up

    await DB.raw.query("SELECT 1+1 AS RESULT;");
    return res.status(200).json({
      status: "UP",
      reasons: ["DB OK"]
    });
  } catch (err) {
    LOG.error(err);
    return res.status(500).json({
      status: "DOWN",
      reasons: ["Unable to connect with DB"]
    });
  }
};

export default { healthCheck, readinessCheck };
