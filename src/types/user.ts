import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<string>;
  name: string;
  email: string;
}
