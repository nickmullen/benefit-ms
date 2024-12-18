import { QueryObj, User } from "../../types/config";
import { TranslationRecord } from "../../models/translation";

export const getTranslationsByEntityFromDb = async (entityId: string) => {
  try {
    const result = await TranslationRecord.findAll({
      where: { entityId: entityId }
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};
