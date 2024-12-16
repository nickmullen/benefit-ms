import { QueryTypes, BindOrReplacements } from "sequelize";
import { sequelize } from "../database/sequelize-db";

import { Benefit } from "./benefit";
import { BenefitGroup } from "./benefitGroup";
import { ExclusionGroup } from "./exclusionGroup";


import { Users } from "./user";

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

  benefit: Benefit,
  benefitGroup: BenefitGroup,
  users: Users,

  syncAll: async function () {
    let opts;


    await this.users.sync(opts);
    await this.benefit.sync(opts);
  }
};
