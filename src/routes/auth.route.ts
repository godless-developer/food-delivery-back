import { Router } from "express";
import { getUsers, signUp } from "../controllers/auth/signup.controller";
import { signIn } from "../controllers/auth/signin.controller";

const userRoute = Router();

userRoute.post("/signup", signUp);
userRoute.get("/signup", getUsers);
userRoute.post("/signin", signIn);
export default userRoute;
