import express, { Request, Response, NextFunction } from "express";
import LOG from "../library/logging";

// routes
import benefitRoutes from "../route/benefit";
import benefitGroupRoutes from "../route/benefitGroup";

import healthCheck from "../route/health";

const createServer = () => {
  const app = express();

  /** Log the request */
  app.use((req, res, next) => {
    /** Log the req */
    LOG.info(`Incoming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on("finish", () => {
      /** Log the res */
      LOG.info(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  /** Rules of our API */

  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      res.status(200).json({});
    }

    next();
  });

  /** Routes */
  app.use("/v3/benefits", benefitRoutes);
  app.use("/v3/benefitGroups", benefitGroupRoutes);

  /** Health check */
  app.use("/health", healthCheck);

  /** Error handling */
  app.use((req, res, next) => {
    const error = new Error("Not found");

    LOG.error(error);

    res.status(404).json({
      message: error.message
    });
  });

  return app;
};

export default createServer;
