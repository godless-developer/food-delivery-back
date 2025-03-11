import express from "express";
import {
  CreateCategory,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../controllers/createCategories";

const foodsRouter = express.Router();
foodsRouter.post("/", CreateCategory);
foodsRouter.get("/", getCategories);
foodsRouter.delete("/:id", deleteCategories);
foodsRouter.put("/:id", updateCategories);

export default foodsRouter;
