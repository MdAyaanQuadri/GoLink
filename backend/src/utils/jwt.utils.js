import jwt from "jsonwebtoken";
import {jwt_secret} from "../config/env.js"
export const  jwtSign = (userId) =>{
    // returns token
    return  jwt.sign({userId},jwt_secret,{expiresIn:"7d"});
}
export const jwtVerify = (token) =>{
    try{
        // returns decoded token
    return jwt.verify(token,jwt_secret);
} catch(err){
    throw new Error("Invalid or Expired token")
}
}