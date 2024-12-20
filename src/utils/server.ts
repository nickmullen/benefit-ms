import express, { Request, Response, NextFunction } from "express";
//middleware
import { errorMiddleware, NotFoundError } from "../middleware/error";
import logging from "../middleware/logging";

// routes
import benefitRoutes from "../route/benefit";
import benefitGroupRoutes from "../route/benefitGroup";


import healthCheck from "../route/health";

const createServer = () => {
  const app = express();

  /** Log the request */
  app.use(logging);

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

  /** Error Handling - Note this must be the last middleware*/
  app.use(errorMiddleware);

  return app;
};

export default createServer;
