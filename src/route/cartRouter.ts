
import express from "express";
import { GetActiveCartforuser } from "../Servise/cartService";
import validateJWT from "../middlewares/vallidateJWT";

const router = express.Router();

router.get('/', validateJWT as any, async (req :any, res) => {
    // Get the userId from JWT after validating from middleware
const userId=req.user._id 
  
        const cart = await GetActiveCartforuser({ userId });
        res.status(200).send(cart);
 
});

export default router;
