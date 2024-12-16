import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize-db";
import { BenefitModel } from "../types/benefit";
// https://sequelize.org/api/v6/class/src/model.js~model

const Benefit = sequelize.define<BenefitModel>(
  "benefit",
  {
    // Model attributes are defined here
    snomed: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    benefit_group_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    exclusion_group_id: {
      type: DataTypes.STRING,
      allowNull: true
    }

  },
  {
    timestamps: false
  }
);

export { Benefit };
