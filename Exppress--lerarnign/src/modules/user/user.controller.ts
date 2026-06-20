import type { Request, Response } from "express";
import { userService } from "../user.service";
import sendResponse from "../../utility/sendResponse";

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserIntoDB(req.body);


    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User Created Successfully!",
      data: result.rows[0],
    })
  } catch (error: any) {
    return res.status(500).json({
      statusCode: 201,
      success: true,
      message: "User Created Successfully!",
      error: error
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUserFromDB();

    return res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.getSingleUserDB(id as string);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.updateUserFormDB(req.body, id as string);

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await userService.deletedUserFromDB(id as string);

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: {},
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
};