import { LocalisedString } from "./localisedString";

export type ExpandedBenefitGroup = {
  id: string;
  names: Array<LocalisedString>;
  createdAt: Date;
  updatedAt: Date;
}