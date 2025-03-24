import { json } from "body-parser";
import { Request, Response } from "express";
import userModel from "../../models/user.model";
import { compareSync } from "bcryptjs";

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(401).json({ message: "emailaa oruulna uu" });
      return;
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "email bvrtgelgvi baina" });
      return;
    }

    const isCorrect = compareSync(password, user?.password);

    if (!isCorrect) {
      res.status(401).json({ message: "password buruu bna" });
      return;
    }
    res.status(200).json({ message: "amjilttai newterlee", data: user });
  } catch (error) {
    res.status(500).json({ message: "aldaa garlaa", error });
  }
};
