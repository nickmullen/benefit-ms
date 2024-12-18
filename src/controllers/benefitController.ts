import { NextFunction, Request, Response } from "express";

import { ExpandedBenefit } from "../types/benefit";

import { handleResponse } from "../utils/handleResponse";
import LOG from "../library/logging";
import { LocalisedString } from "../types/localisedString";
import { BenefitRecord } from "../models/benefit";
import { CreateBenefit } from "../services/createBenefit";
import { TranslationRecord } from "../models/translation";

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { snomed, benefitGroupId, exclusionGroupId, names } = req.body;
  LOG.info("Attempting to create benefit with snomed: %s", snomed);
  try {
    const output = await new CreateBenefit(snomed, benefitGroupId, exclusionGroupId, names).save();
    return handleResponse(res, 201, "created", output);
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message, null);
  };
};

const getBenefitBySnomed = async (req: Request, res: Response, next: NextFunction) => {
  if (req.params.snomed) {
    const snomed = req.params.snomed;
    try {
      // First find the benefit record
      const result = await BenefitRecord.findByPk(snomed);
      if (result) {
        // and if it exists, then look for all the translated names
        const translations = await TranslationRecord.findAll({
          where: { entityId: result.dataValues.snomed }
        });
        LOG.debug("Translations: %o", translations);
        let expandedBenefit: ExpandedBenefit = {
          snomed: result.snomed,
          benefitGroupId: result.benefitGroupId,
          exclusionGroupId: result.exclusionGroupId,
          names: [],
          createdAt: result.createdAt,
          updatedAt: result.updatedAt
        };
        translations.forEach((translation) => {
          if (translation.type == "name") {
            const item: LocalisedString = {
              language: translation.language,
              value: translation.value
            };
            expandedBenefit.names.push(item);
          }
        });
        return handleResponse(res, 200, "Success", { benefit: expandedBenefit });

      } else {
        return handleResponse(res, 404, "Benefit not found");
      }
    } catch (err: any) {
      if (err instanceof Error) LOG.error(err.message);
      return handleResponse(res, 500, err.message, null);
    }
  } else {
    return handleResponse(res, 500, "benefit controller:getBenefitBySnomed - no snomed code passed in query", null);
  }
};
export default { create, getBenefitBySnomed };
