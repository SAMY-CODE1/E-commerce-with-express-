import express from "express";
import { setInitiallProducts } from "../Servise/productService";

const router = express.Router();
router.get("/", async (req, res) => {
  const r = await setInitiallProducts();
  res.status(200).send( r );
});

export default router;

