import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { IProduct } from "./productModel";

const CartStatusinums = ["active", "completed"];
export interface IcartItem extends Document {
  product: IProduct;
  unitPrace: number;
  quantity: number;
}
export interface Icart extends Document {
  userId: ObjectId | string;
  items: IcartItem[];
  totalAmont: number;
  status: "active" | "completed";
}

const ItemCardSchema = new Schema<IcartItem>({
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  unitPrace: { type: Number, required: true, default: 1 },
  quantity: { type: Number, required: true },
});
const CartSchima = new Schema<Icart>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [ItemCardSchema],
  totalAmont: { type: Number, required: true },
  status: { type: String, enum: CartStatusinums, default: "active" },
});
const CartModul = mongoose.model<Icart>("Cart", CartSchima);
export default CartModul