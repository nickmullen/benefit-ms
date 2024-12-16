import { QueryObj, User } from "../../types/config";
import { Benefit } from "../../models/benefit";

export const getBenefitBySnomedFromDb = async (snomed: string) => {
  try {
    const result = await Benefit.findByPk(snomed);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

