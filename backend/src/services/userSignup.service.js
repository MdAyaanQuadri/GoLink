import { userModel } from "../models/user.model.js";
import {  hashedPassword } from "../utils/hash.utils.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { AppError } from "../error.js";
 const userSignupService = async ({name,email,password})=>{
    const userExists = await userModel.findOne({email});
    if(userExists){
        throw new AppError("user already exists",409)
    }
    const hashPassword = await hashedPassword(password)
    const response = await userModel.create({
        name,
        email,
        password: hashPassword
    });
    const id = response._id
    const token = jwtSign(id);
    return token;
}
export default userSignupService