import { QueryObj, User } from "../../types/config";
import { Translation } from "../../models/translation";

export const getTranslationsByEntityFromDb = async (entityId: string) => {
  try {
    const result = await Translation.findAll({
      where: { entity_id: entityId }
    });
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

// export const createBenefitToDb = async (benefit: typeof Benefit) => {
//   try {
//     const result = await Benefit.create(benefit);
//     return result;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };


// export const getAllUsersFromDb = async (queryObj: QueryObj | {}) => {
//   try {
//     const result = await Users.findAndCountAll(queryObj);
//     return result;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const createUserToDb = async (user: User) => {
//   try {
//     const result = await Users.create(user);
//     return result;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };


// export const updateUserInDb = async (user: User) => {
//   try {
//     await Users.update(user, {
//       where: {
//         id: user.id
//       }
//     });
//     const result = await getUserByIdFromDb(user.id);
//     return result;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };

// export const removeUserFromDb = async (id: string) => {
//   try {
//     const result = await Users.destroy({
//       where: {
//         id
//       }
//     });
//     return result;
//   } catch (error: any) {
//     throw new Error(error);
//   }
// };
