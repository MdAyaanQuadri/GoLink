import jwt from "jsonwebtoken";
import {jwt_secret} from "../config/env.js"
import { AppError } from "../error.js";
export const  jwtSign = (id) =>{
    // returns token
    return  jwt.sign(id,jwt_secret,{expiresIn:"7d"});
}
export const jwtVerify = (token) =>{
    try{
        // returns decoded token
    return jwt.verify(token,jwt_secret);
} catch(err){
    throw new AppError("Ivalid or Expired token",401)
}
}