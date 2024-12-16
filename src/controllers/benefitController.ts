import { NextFunction, Request, Response } from "express";
import {
  getBenefitBySnomedFromDb,
} from "../database/connections/benefit";
import { ExpandedBenefit } from "../types/benefit";
import { getTranslationsByEntityFromDb } from "../database/connections/translation";

import { handleResponse } from "../utils/handleResponse";
import { v4 as uuidv4 } from "uuid";
import LOG from "../library/logging";
import { Name } from "src/types/name";

const createBenefit = async (req: Request, res: Response, next: NextFunction) => {
  const { benefitGroupId, exclusionGroupId, description } = req.body;
  const id = uuidv4();

  LOG.debug("Create Benefit:  %s, %s, %s", benefitGroupId, exclusionGroupId, description);

  //   try {
  //     const newUser = await createUserToDb({
  //       id,
  //       name,
  //       email
  //     });

  //     return handleResponse(res, 201, "User created successfully", { user: newUser });
  //   } catch (err: any) {
  //     if (err instanceof Error) LOG.error(err.message);
  //     return handleResponse(res, 500, err.message || "Problem occurred while creating user", null);
  //   }
};

const getBenefitBySnomed = async (req: Request, res: Response, next: NextFunction) => {
  if (req.params.snomed) {
    const snomed = req.params.snomed;
    try {
      const result = await getBenefitBySnomedFromDb(snomed);
      if (result) {
        const translations = await getTranslationsByEntityFromDb(result.dataValues.snomed);
        LOG.debug("Translations: %o", translations);
        let expandedBenefit: ExpandedBenefit = {
          snomed: result.snomed,
          benefitGroupId: result.benefit_group_id,
          exclusionGroupId: result.exclusion_group_id,
          names: []
        };
        translations.forEach((translation) => {
          if (translation.type == "name") {
            const item: Name = {
              language: translation.language,
              value: translation.value
            };
            expandedBenefit.names.push(item)
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

// const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
//   let queryObj = {};
//   if (req.query.limit) {
//     let limit: number = parseInt(req.query.limit.toString());
//     Object.assign(queryObj, { limit: limit });
//   }

//   if (req.query.offset) {
//     let offset: number = parseInt(req.query.offset.toString());
//     Object.assign(queryObj, { offset: offset });
//   }

//   try {
//     const result = await getAllUsersFromDb(queryObj);
//     return handleResponse(res, 200, "Success", result);
//   } catch (err: any) {
//     if (err instanceof Error) LOG.error(err.message);
//     return handleResponse(res, 500, err.message || "Internal Server error", { status: "error" });
//   }
// };

// const updateUser = async (req: Request, res: Response) => {
//   const { userId } = req.params;
//   try {
//     const user = await getUserByIdFromDb(userId);
//     if (!user) {
//       return handleResponse(res, 404, "User id doesn't exist", null);
//     }
//     const newUser = await updateUserInDb({ id: userId, ...req.body });
//     return handleResponse(res, 200, "User updated successfully", { user: newUser });
//   } catch (err: any) {
//     if (err instanceof Error) LOG.error(err.message);
//     return handleResponse(res, 500, err.message, null);
//   }
// };

// const deleteUser = async (req: Request, res: Response) => {
//   const { userId } = req.params;
//   try {
//     const user = await getUserByIdFromDb(userId);
//     if (!user) {
//       return handleResponse(res, 404, "User id doesn't exist", null);
//     }
//     await removeUserFromDb(userId);
//     return handleResponse(res, 204, "User deleted successfully");
//   } catch (err: any) {
//     if (err instanceof Error) LOG.error(err.message);
//     return handleResponse(res, 500, err.message, null);
//   }
// };

export default { createBenefit, getBenefitBySnomed };
