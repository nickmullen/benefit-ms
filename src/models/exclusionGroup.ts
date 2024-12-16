import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize-db";
import { ExclusionGroupModel } from "../types/exclusionGroup";
// https://sequelize.org/api/v6/class/src/model.js~model

const ExclusionGroup = sequelize.define<ExclusionGroupModel>(
  "exclusion_group",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    parent_group_id: {
      type: DataTypes.STRING,
    }
  },

  {
    timestamps: false
  }
);

export { ExclusionGroup };
