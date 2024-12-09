import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface Regesterparams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface Loginparams {
  email: string;
  password: string;
}
export const Regest = async ({
  firstName,
  lastName,
  email,
  password,
}: Regesterparams) => {
  const finduser = await userModel.findOne({ email });
  if (finduser) {
    return { data: "user already  exist !", statusCode: 404 };
  }
  const hashPasssword = await bcrypt.hash(password, 10);
  const newuser = new userModel({
    firstName,
    lastName,
    email,
    password: hashPasssword,
  });
  await newuser.save();
  return {
    data: generateJWT({ firstName, lastName, email }),
    statusCode: 200,
  };
};
/////////////////////////
export const Login = async ({ email, password }: Loginparams) => {
  const finduser = await userModel.findOne({ email });
  if (!finduser) {
    return { data: "incorrect email or password !", statusCode: 400 };
  }
  const passwordMatch = await bcrypt.compare(password, finduser.password);
  if (!passwordMatch) {
    return { data: "incorrect email or password !", statusCode: 400 };
  } else {
    return {
      data: generateJWT({ email, firstname: finduser.firstName }),
      statusCode: 200,
    };
  }
};
const generateJWT = (data: any) => {
  return jwt.sign(data, "R659-teeEJI(00i)6&qD");
};
