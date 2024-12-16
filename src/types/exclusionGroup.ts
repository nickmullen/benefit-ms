import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

export interface ExclusionGroupModel extends Model<InferAttributes<ExclusionGroupModel>, InferCreationAttributes<ExclusionGroupModel>> {
  id: string;
  parent_group_id: string;
}
