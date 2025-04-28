import mongoose, { Schema } from "mongoose";

type FoodOrderSchemaType = {
  user?: mongoose.Types.ObjectId;
  totalPrice: number;
  status?: string;
  foodOrderItems?: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
};

const FoodOrderSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "canceled", "delivered"],
      default: "pending",
    },
    foodOrderItems: {
      type: [
        {
          food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
          quantity: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model<FoodOrderSchemaType>(
  "FoodOrder",
  FoodOrderSchema
);
