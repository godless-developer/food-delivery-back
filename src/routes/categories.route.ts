import express from "express";
import {
  CreateCategory,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../controllers/controllerCategories";

const categoriesRouter = express.Router();
categoriesRouter.post("/", CreateCategory);
categoriesRouter.get("/", getCategories);
categoriesRouter.delete("/:id", deleteCategories);
categoriesRouter.put("/:id", updateCategories);

export default categoriesRouter;
