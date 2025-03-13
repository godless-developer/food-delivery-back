import express from "express";
import {
  CreateFoodInfo,
  deleteFoodsInfo,
  getAllFoods,
} from "../controllers/controllerFoodsInfo";

const foodsInfoRoute = express.Router();

foodsInfoRoute.post("/", CreateFoodInfo);
foodsInfoRoute.get("/", getAllFoods);
foodsInfoRoute.delete("/:id", deleteFoodsInfo);

export default foodsInfoRoute;
