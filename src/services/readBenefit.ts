import { BenefitRecord } from "../models/benefit";
import { ExpandedBenefit } from "../types/benefit";
import { NotFoundError } from "../middleware/error";
import { ReadTranslations } from "./readTranslations";
import LOG from "../library/logging";



class ReadBenefit {
  snomed: string;

  constructor(snomed: string) {
    this.snomed = snomed;
  }

  public async read() {
    // Find the benefit record, and then the associated translations
    const benefitRecord = await BenefitRecord.findByPk(this.snomed);

    if (!benefitRecord) throw new NotFoundError("Snomed " + this.snomed + " not found");

    let foundBenefit: ExpandedBenefit = {
      snomed: benefitRecord.snomed,
      benefitGroupId: benefitRecord.benefitGroupId,
      exclusionGroupId: benefitRecord.exclusionGroupId,
      names: [],
      createdAt: benefitRecord.createdAt,
      updatedAt: benefitRecord.updatedAt
    };

    return await new ReadTranslations(benefitRecord.dataValues.snomed, "name").find()
      .then(foundTranslations => {
        LOG.warn("******* found translations %s, ", JSON.stringify(foundTranslations));
        if (!foundTranslations) throw new NotFoundError("Snomed " + this.snomed + " had no translations");
        foundTranslations.forEach(translation => {
          foundBenefit.names.push({
            language: translation.language,
            value: translation.value
          })
        })
        return foundBenefit;
      })
  }
}

export { ReadBenefit };
