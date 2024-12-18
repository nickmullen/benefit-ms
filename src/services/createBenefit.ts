import { LocalisedString } from "../types/localisedString";
import { BenefitRecord } from "../models/benefit";
import { ExpandedBenefit } from "../types/benefit";
import { TranslationRecord } from "../models/translation";
import LOG from "../library/logging";


class CreateBenefit {
  snomed: string;
  benefitGroupId: string;
  exclusionGroupId: string;
  names: Array<LocalisedString>;


  constructor(snomed: string, benefitGroupId: string, exclusionGroupId: string, names: Array<LocalisedString>) {
    this.snomed = snomed;
    this.benefitGroupId = benefitGroupId;
    this.exclusionGroupId = exclusionGroupId;
    this.names = names;
  }

  public async save() {
    let createdBenefit: ExpandedBenefit;
    try {

      const result = await BenefitRecord.create({
        snomed: this.snomed,
        benefitGroupId: this.benefitGroupId,
        exclusionGroupId: this.exclusionGroupId
      });
      if (result) {
        createdBenefit = {
          snomed: result.dataValues.snomed,
          benefitGroupId: result.dataValues.benefitGroupId,
          exclusionGroupId: result.dataValues.exclusionGroupId,
          names: [],
          createdAt: result.dataValues.createdAt,
          updatedAt: result.dataValues.updatedAt
        };

        // now the translations, save each in turn
        await this.names.forEach(nameItem => {
          const outputFromDb = TranslationRecord.create({
            entityId: this.snomed,
            language: nameItem.language,
            value: nameItem.value,
            type: "name"
          });

        })
        LOG.debug("Created the benefit. Returning %o", createdBenefit);
        return (createdBenefit);
      }
    } catch (err: any) {
      LOG.info("Error of type %s", typeof err);
      if (err instanceof Error) LOG.error(err.name, err.message);
      throw new Error("Duplicate snomed probably!");
    }

  }
}
export { CreateBenefit };
