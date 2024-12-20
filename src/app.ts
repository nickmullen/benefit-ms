import { CONFIG } from "./config/config";
import { sequelize } from "./database/sequelize-db";
import LOG from "./library/logging";
import { banner } from "./library/banner";
import createServer from "./utils/server";

const app = createServer();

/** Connect to the DB */
const ConnectToDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    LOG.info("Connection to the database has been established successfully.");
  } catch (error) {
    LOG.error("Unable to connect to the database:" + error);
  }
};

/** Start Server */
const StartServer = () => {
  LOG.info("Server is starting");
  banner();

  app.listen(CONFIG.SERVER.PORT, () => LOG.info(`Server is running on port ${CONFIG.SERVER.PORT}`));
};

/** Start the server */
StartServer();

/** Establish connection to the database */
ConnectToDB();
