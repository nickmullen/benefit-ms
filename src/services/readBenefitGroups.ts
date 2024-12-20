import { BenefitGroupRecord } from "../models/benefitGroup";
import { ExpandedBenefitGroup } from "../types/benefitGroup";
import { ReadTranslations } from "./readTranslations";
import LOG from "../library/logging";


class ReadBenefitGroups {

  constructor() { };

  public async read() {
    try {
      //Find all the groups
      const foundGroups = await BenefitGroupRecord.findAll();
      // then find the translated names for eachs
      const benefitGroupsToReturn = await Promise.all(
      foundGroups.map(async group => {
        const names = await new ReadTranslations(group.dataValues.id, "name").find();
        let groupToReturn: ExpandedBenefitGroup = {
          id: group.dataValues.id,
          names: names,
          createdAt: group.dataValues.createdAt,
          updatedAt: group.dataValues.updatedAt,
        };
        return groupToReturn;
      })
      )

      return benefitGroupsToReturn;


    } catch (err: any) {
      LOG.info("Error of type %s", typeof err);
      if (err instanceof Error) LOG.error(err.message);
      throw new Error(err);
    }

  }
}

export { ReadBenefitGroups };
