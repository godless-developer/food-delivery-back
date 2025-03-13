import { RequestHandler } from "express";
import foodCategoryModel from "../models/food-category-model";

export const CreateCategory: RequestHandler = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await foodCategoryModel.create(categoryData);
    res.status(200).json({ message: "success added category", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in CreateCategory", error });
  }
};

export const getCategories: RequestHandler = async (req, res) => {
  try {
    const AllCategory = await foodCategoryModel.find();
    res
      .status(200)
      .json({ message: "success get category", data: AllCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in getCategories", error });
  }
};

export const deleteCategories: RequestHandler = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteCategory = await foodCategoryModel.findByIdAndDelete(_id);
    res
      .status(200)
      .json({ message: "success deleted category", data: deleteCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in deleteCategories", error });
  }
};

export const updateCategories: RequestHandler = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateCategory = await foodCategoryModel.findByIdAndUpdate(
      _id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ message: "success updated category", data: updateCategory });
  } catch (error) {
    res.status(500).json({ message: "Error in updateCategories", error });
  }
};
