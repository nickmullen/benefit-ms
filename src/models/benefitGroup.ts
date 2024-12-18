import { sequelize } from "../database/sequelize-db";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class BenefitGroupRecord extends Model<InferAttributes<BenefitGroupRecord>, InferCreationAttributes<BenefitGroupRecord>> {
  declare id: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

BenefitGroupRecord.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
}, {
  sequelize,
  tableName: "benefitGroup",
  timestamps: true
});

export { BenefitGroupRecord };
