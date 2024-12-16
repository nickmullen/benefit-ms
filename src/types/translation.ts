import { Model, CreationOptional, InferAttributes, InferCreationAttributes, IntegerDataType } from "sequelize";

export interface TranslationModel extends Model<InferAttributes<TranslationModel>, InferCreationAttributes<TranslationModel>> {
  id: number;
  entity_id: string;
  type: string;
  language: string;
  value: string;
}
