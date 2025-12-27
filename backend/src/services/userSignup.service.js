import { AppError } from "../error.js";
import { userModel } from "../models/user.model.js";
import {  hashedPassword } from "../utils/hash.utils.js";
import { jwtSign } from "../utils/jwt.utils.js";
    const userSignupService = async ({username,email,password})=>{
    const userExists = await userModel.findOne({email});
    if(userExists){
        throw new AppError({
            message:"user already Exists",
            errorCode:"DUPLICATE_USER",
            statusCode:409,
        })
    }
    const hashPassword = await hashedPassword(password)
    const response = await userModel.create({
        username,
        email,
        password: hashPassword
    });
    
    
    
    const id = response._id
    const userId = id.toString();
    const token = jwtSign(userId);    
    return {token,response};
}
export default userSignupService