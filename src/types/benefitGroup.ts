import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

export interface BenefitGroupModel extends Model<InferAttributes<BenefitGroupModel>, InferCreationAttributes<BenefitGroupModel>> {
  id: string;
}
