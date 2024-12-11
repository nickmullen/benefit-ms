import { NextFunction, Request, Response } from "express";
import {
  createUserToDb,
  getAllUsersFromDb,
  getUserByIdFromDb,
  updateUserInDb,
  removeUserFromDb
} from "../database/connections/users";
import { handleResponse } from "../utils/handleResponse";
import { v4 as uuidv4 } from "uuid";
import LOG from "../library/logging";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email } = req.body;
  const id = uuidv4();

  try {
    const newUser = await createUserToDb({
      id,
      name,
      email
    });

    return handleResponse(res, 201, "User created successfully", { user: newUser });
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message || "Problem occurred while creating user", null);
  }
};

const getUserBasedOnId = async (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.userId;
  try {
    const result = await getUserByIdFromDb(userId);
    if (result) {
      return handleResponse(res, 200, "Success", { user: result });
    } else {
      return handleResponse(res, 404, "User not found");
    }
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message, null);
  }
};

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  let queryObj = {};
  if (req.query.limit) {
    let limit: number = parseInt(req.query.limit.toString());
    Object.assign(queryObj, { limit: limit });
  }

  if (req.query.offset) {
    let offset: number = parseInt(req.query.offset.toString());
    Object.assign(queryObj, { offset: offset });
  }

  try {
    const result = await getAllUsersFromDb(queryObj);
    return handleResponse(res, 200, "Success", result);
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message || "Internal Server error", { status: "error" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await getUserByIdFromDb(userId);
    if (!user) {
      return handleResponse(res, 404, "User id doesn't exist", null);
    }
    const newUser = await updateUserInDb({ id: userId, ...req.body });
    return handleResponse(res, 200, "User updated successfully", { user: newUser });
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message, null);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const user = await getUserByIdFromDb(userId);
    if (!user) {
      return handleResponse(res, 404, "User id doesn't exist", null);
    }
    await removeUserFromDb(userId);
    return handleResponse(res, 204, "User deleted successfully");
  } catch (err: any) {
    if (err instanceof Error) LOG.error(err.message);
    return handleResponse(res, 500, err.message, null);
  }
};

export default { createUser, getUserBasedOnId, getAllUsers, updateUser, deleteUser };
