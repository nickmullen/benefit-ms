import { LocalisedString } from "../types/localisedString";
import { BenefitGroupRecord } from "../models/benefitGroup";
import { ExpandedBenefitGroup } from "../types/benefitGroup";
import { TranslationRecord } from "../models/translation";
import LOG from "../library/logging";

class ReadBenefitGroups {

  constructor() { };

  public async read() {
    try {
      let benefitGroupsToReturn: Array<ExpandedBenefitGroup> = [];
      //Find all the groups
      const foundGroups = await BenefitGroupRecord.findAll();
      // then find the translated names for each
      foundGroups.forEach(group => {
        let groupToReturn: ExpandedBenefitGroup = {
          id: group.dataValues.id,
          names: [],
          createdAt: group.dataValues.createdAt,
          updatedAt: group.dataValues.updatedAt,
        }
        TranslationRecord.findAll({
          where: { entityId: group.id, type: "name" }
        }).then(names => {
          LOG.warn("Names: %j", JSON.stringify(names));
          names.forEach(name => {
            groupToReturn.names.push({
              language: name.dataValues.language,
              value: name.dataValues.value
            })
          })
        })
        LOG.warn("GroupToReturn %o", groupToReturn);
        benefitGroupsToReturn.push(groupToReturn);
      });
      return benefitGroupsToReturn;

    } catch (err: any) {
      LOG.info("Error of type %s", typeof err);
      if (err instanceof Error) LOG.error(err.message);
      throw new Error(err);
    }

  }
}

export { ReadBenefitGroups };
