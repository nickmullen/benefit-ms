import { LocalisedString } from "./localisedString";

export type ExpandedBenefit = {
  snomed: string;
  benefitGroupId: string;
  exclusionGroupId: string;
  names: Array<LocalisedString>;
  createdAt: Date;
  updatedAt: Date;
}