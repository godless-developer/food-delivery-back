import mongoose, { Schema } from "mongoose";

type FoodCategorySchemaType = {
  categoryName: string;
};

const FoodCategorySchema: Schema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<FoodCategorySchemaType>(
  "FoodCategory",
  FoodCategorySchema
);
