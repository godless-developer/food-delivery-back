import { Router } from "express";
import {
  createFoodOrder,
  deleteFoodOrder,
  getFoodOrders,
  getFoodOrdersByUser,
  updateFoodOrder,
} from "../controllers/food-order.controller";

const foodOrderRoute = Router();

foodOrderRoute
  .post("/", createFoodOrder)
  .get("/", getFoodOrders)
  .get("/:userId", getFoodOrdersByUser)
  .delete("/", deleteFoodOrder)
  .patch("/:foodOrderId", updateFoodOrder);

export { foodOrderRoute };
