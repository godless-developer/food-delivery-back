import { RequestHandler } from "express";
import foodsInfo from "../models/foods-info";

export const CreateFoodInfo: RequestHandler = async (req, res) => {
  try {
    const foodInfoData = req.body;
    const newFoodInfo = await foodsInfo.create(foodInfoData);
    res.status(200).json({ message: "success added foodInfo", newFoodInfo });
  } catch (error) {
    res.status(500).json({ message: "Error in CreateFoodInfo", error });
  }
};
//getAllFoods
export const getAllFoods: RequestHandler = async (req, res) => {
  try {
    const AllFoodInfo = await foodsInfo.find();
    res
      .status(200)
      .json({ message: "Succes added getAll", foodsInfo: AllFoodInfo });
  } catch (error) {
    res.status(500).json({ message: "Error in getAllfoods", error });
  }
};
//get foods by category
//const foodsByCategory = await foodsInfo.find({category:req.params.catId});

export const getFoodsByCategory: RequestHandler = async (req, res) => {
  try {
    const foodsByCategory = await foodsInfo.find({
      category: req.params.catId,
    });
  } catch (error) {}
};

export const deleteFoodsInfo: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteFoodInfo = await foodsInfo.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "deleted foodInfo success", foodsInfo: deleteFoodInfo });
  } catch (error) {}
};
