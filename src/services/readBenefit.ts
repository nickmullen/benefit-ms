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

    const foundTranslations = await new ReadTranslations(this.snomed, "name").returnMinimal();
    if (!foundTranslations) throw new NotFoundError("Snomed " + this.snomed + " had no translations");

    return {
      snomed: benefitRecord.snomed,
      benefitGroupId: benefitRecord.benefitGroupId,
      exclusionGroupId: benefitRecord.exclusionGroupId,
      names: foundTranslations,
      createdAt: benefitRecord.createdAt,
      updatedAt: benefitRecord.updatedAt
    };
  }
}

export { ReadBenefit };
