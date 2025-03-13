import mongoose, { Schema } from "mongoose";

type FoodInfoSchemaType = {
  foodName: string;
  foodDescription: string;
  foodPrice: string;
  category: Schema.Types.ObjectId;
};

const FoodsInfoSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    foodDescription: { type: String, required: true },
    foodPrice: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "FoodCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<FoodInfoSchemaType>("foodsInfo", FoodsInfoSchema);
