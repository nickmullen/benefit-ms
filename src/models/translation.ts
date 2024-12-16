
import { DataTypes } from "sequelize";
import { sequelize } from "../database/sequelize-db";
import { TranslationModel } from "../types/translation";
// https://sequelize.org/api/v6/class/src/model.js~model

const Translation = sequelize.define<TranslationModel>(
  "translation",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    entity_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    type: {
      type: DataTypes.ENUM,
      values: ['name', 'description'],
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },

  {
    timestamps: false
  }
);

export { Translation };
