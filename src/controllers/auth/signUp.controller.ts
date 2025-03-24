import { Request, RequestHandler, Response } from "express";
import { hashSync } from "bcryptjs";
import userModel from "../../models/user.model";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      res.status(401).json({ message: "Emailaa bichne vvv" });
      return;
    }
    const hashedPassword = hashSync(password, 10);
    const createUser = await userModel.create({
      email,
      password: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "hereglegch amjilttai bvrtgelee", data: createUser });
  } catch (error) {
    res.status(500).json({ message: "aldaa garlaa", error });
  }
};

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const AllUsers = await userModel.find();
    res.status(200).json({ message: "success get category", data: AllUsers });
  } catch (error) {
    res.status(500).json({ message: "Error in getCategories", error });
  }
};
