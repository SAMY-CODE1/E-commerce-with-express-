import { productModel } from "../models/productModel";

export const getAllproducts = async () => {
  return await productModel.find();
};
export const setInitiallProducts = async () => {
  const products = [
    {
      title: "dell laptop",
      image:
        "https://microless.com/cdn/products/f026b0f0fb6302d095eda73e25215408-hi.jpg",
      price: 500,
      stock: 20,
    },
    {
      title: "mac book",
      image:
        "https://microless.com/cdn/products/f026b0f0fb6302d095eda73e25215308-hi.jpg",
      price: 500,
      stock: 20,
    },
  ];
  const prodexist = await getAllproducts();
  if (prodexist.length === 0) {
    return await productModel.insertMany(products);
  }
};
