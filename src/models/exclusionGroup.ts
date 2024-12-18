import { sequelize } from "../database/sequelize-db";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

class ExclusionGroupRecord extends Model<InferAttributes<ExclusionGroupRecord>, InferCreationAttributes<ExclusionGroupRecord>> {
  declare id: string;
  declare parentGroupId: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

ExclusionGroupRecord.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
  },
  parentGroupId: {
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
  tableName: "exclusionGroup",
  timestamps: true
});

export { ExclusionGroupRecord };
