import { QueryTypes, BindOrReplacements } from "sequelize";
import { sequelize } from "../database/sequelize-db";

import { BenefitRecord } from "./benefit";
import { BenefitGroupRecord } from "./benefitGroup";
import { ExclusionGroupRecord } from "./exclusionGroup";
import { TranslationRecord } from "./translation";

const querySelect = async (query: string, replacements: BindOrReplacements) => {
  return await sequelize.query(query, {
    replacements: replacements,
    raw: true,
    type: QueryTypes.SELECT
  });
};

export default {
  raw: sequelize,

  select: querySelect,

  benefit: BenefitRecord,
  benefitGroup: BenefitGroupRecord,
  exclusionGroup: ExclusionGroupRecord,
  translation: TranslationRecord,

  syncAll: async function () {
    let opts;

    await this.benefit.sync(opts);
    await this.benefitGroup.sync(opts);
    await this.exclusionGroup.sync(opts);
    await this.translation.sync(opts);
  }
};
