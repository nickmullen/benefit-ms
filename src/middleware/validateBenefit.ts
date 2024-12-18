import { NextFunction, Request, Response } from "express";

import { CONFIG } from "../config/config";

import { handleResponse } from "../utils/handleResponse";
import { LocalisedString } from "../types/localisedString";

import LOG from "./../library/logging";

export const validateBenefitBody = (req: Request, res: Response, next: NextFunction) => {

  LOG.debug("Validating new benefit %o", req.body);
  LOG.debug("Anticipating languages: %s", JSON.stringify(CONFIG.LANGUAGES));
  let failureReasons = '';

  const newBenefit = req.body;

  //Snomed should not contains non-numeric characters and should be between 6 and 18 digits
  const snomedRegEx = new RegExp("^[0-9]{6,18}$");

  //UUIDs are nice and friendly :)
  const uuidRegEx = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$");


  LOG.debug("SNOMED %s", newBenefit.snomed);
  if (!newBenefit.snomed) failureReasons = failureReasons + "Missing Snomed code. ";
  else {
    // Check the snomed code looks like a number (even though we're going to store it as a string). Do this by parsing it as an int and putting back as a string
    if (!snomedRegEx.test(newBenefit.snomed))
      failureReasons = failureReasons + "Snomed should not contains non-numeric characters and should be between 6 and 18 digits. ";
  }

  if ((newBenefit.benefitGroupId) && !(uuidRegEx.test(newBenefit.benefitGroupId)))
    failureReasons = failureReasons + "If supplied, benefitGroupId must be a UUID4. ";

  if ((newBenefit.exclusionGroupId) && !(uuidRegEx.test(newBenefit.exclusionGroupId)))
    failureReasons = failureReasons + "If supplied, exclusionGroupId must be a UUID4. ";

  // We need to make sure that the names have been supplied in ALL the required languages
  const languages: Array<string> = JSON.parse(CONFIG.LANGUAGES);
  const suppliedNames: Array<LocalisedString> = newBenefit.names;
  languages.forEach(language => {
    const newArray = suppliedNames.filter(nameItem => nameItem.language == language);
    if (newArray.length == 0) failureReasons = failureReasons + "Expected name to be supplied in " + language + ", required languages being " + languages;
    // LOG.debug(suppliedNames.filter(name.: Name => name.language === language));
  });


  if (failureReasons.length > 0) {
    return handleResponse(res, 400, failureReasons);
  } else next();
};
