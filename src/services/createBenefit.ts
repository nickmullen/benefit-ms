import { LocalisedString } from "../types/localisedString";
import { BenefitRecord } from "../models/benefit";
import { ExpandedBenefit } from "../types/benefit";
import { TranslationRecord } from "../models/translation";
import LOG from "../library/logging";
import { ReadBenefit } from "./readBenefit";


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


    //TODO:
    // should validate that the benefitGroupId and exclusionGroupId exist if provided
    // should wrap these into a transaction for super-safety

    await BenefitRecord.create({
      snomed: this.snomed,
      benefitGroupId: this.benefitGroupId,
      exclusionGroupId: this.exclusionGroupId
    });

    await this.names.map(nameItem => {
      TranslationRecord.create({
        entityId: this.snomed,
        language: nameItem.language,
        value: nameItem.value,
        type: "name"
      });

    })
    // having created it, read it back
    return new ReadBenefit(this.snomed).read();
  }
}
export { CreateBenefit };
