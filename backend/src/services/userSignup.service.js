import { userModel } from "../models/user.model.js";
import {  hashedPassword } from "../utils/hash.utils.js";
import { jwtSign } from "../utils/jwt.utils.js";
    const userSignupService = async ({userName,email,password})=>{
    const userExists = await userModel.findOne({email});
    if(userExists){
        throw new Error("user already exists")
    }
    const hashPassword = await hashedPassword(password)
    const response = await userModel.create({
        userName,
        email,
        password: hashPassword
    });
    const id = response._id
    const userId = id.toString();
    const token = jwtSign(userId);    
    return token;
}
export default userSignupService