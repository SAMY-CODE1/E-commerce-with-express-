import express from "express";
import userRoute from "./route/userRoute";
import { setInitiallProducts } from "./Servise/productService";
import prodRoute from "./route/productRouter";
const mongoose = require("mongoose");
const app = express();
const port = 5001;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"));
//set initial product to the data base
setInitiallProducts();
app.use("/user", userRoute);
app.use("/products", prodRoute);
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
