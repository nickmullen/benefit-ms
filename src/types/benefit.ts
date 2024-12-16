import { Model, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import { Name } from "./name";

export interface BenefitModel extends Model<InferAttributes<BenefitModel>, InferCreationAttributes<BenefitModel>> {
  snomed: string;
  benefit_group_id: string;
  exclusion_group_id: string;
}



export type ExpandedBenefit = {
  snomed: string;
  benefitGroupId: string;
  exclusionGroupId: string;
  names: Array<Name>;

}