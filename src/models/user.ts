import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize-db";
import { UserModel } from "../types/user";
// https://sequelize.org/api/v6/class/src/model.js~model

const Users = sequelize.define<UserModel>(
  "users",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    }
  },
  {
    timestamps: false
  }
);

export { Users };
