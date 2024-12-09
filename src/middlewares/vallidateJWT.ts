import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel";
const validateJWT = (res: Response, req: any, next: NextFunction) => {
  const authorizationheader = req.get("authorization");
  if (!authorizationheader) {
    res.status(403).send("authirization header was not provided");
    return;
  }
  const token = authorizationheader.split(" ")[1];
  if (!token) {
    res.status(401).send("berer token not found");
    return;
  }
  jwt.verify(
    token,
    "R659-teeEJI(00i)6&qD",
    async (error: any, payload: any) => {
      if (error) {
        res.status(403).send("invalide token");
        return;
      }
      if (!payload) {
        res.status(403).send("invalide token payload");
      }

      const user = await userModel.findOne({ email: payload.email });
      req.user = user;
      next();
    }
  );
};

export default validateJWT;
