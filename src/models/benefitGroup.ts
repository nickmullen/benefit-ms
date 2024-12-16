import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize-db";
import { BenefitGroupModel } from "../types/benefitGroup";
// https://sequelize.org/api/v6/class/src/model.js~model

const BenefitGroup = sequelize.define<BenefitGroupModel>(
  "benefit_group",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    }
  },
  {
    timestamps: false
  }
);

export { BenefitGroup };
