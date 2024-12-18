import { sequelize } from "../database/sequelize-db";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";


class BenefitRecord extends Model<InferAttributes<BenefitRecord>, InferCreationAttributes<BenefitRecord>> {
  declare snomed: string;
  declare benefitGroupId: string;
  declare exclusionGroupId: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}



BenefitRecord.init({
  snomed: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
  },
  benefitGroupId: {
    type: DataTypes.UUIDV4,
    allowNull: true
  },
  exclusionGroupId: {
    type: DataTypes.UUIDV4,
    allowNull: true
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
  tableName: "benefit",
  timestamps: true
});



export { BenefitRecord };
