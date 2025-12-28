import { userModel } from "../models/user.model.js";
import { AppError } from "../error.js";
import { jwtSign } from "../utils/jwt.utils.js";
import { comparePassword } from "../utils/hash.utils.js";
const  userLoginService = async ({email,password})=>{
    const response = await userModel.findOne({email});
    if(!response){
        throw new AppError({
            statusCode:401,
            errorCode:"INVALID_USER",
            message:"user doesnot exists try signing up"
        })
    }
    const correctPassword = comparePassword(password,response.password);
    if(!correctPassword){
        throw new AppError({
            statusCode:401,
            errorCode:"INVALID_PASSWORD",
            message:"please enter correct password"
        })
    }
    const token = jwtSign(response._id.toString());
    return {token,response}
}
export default userLoginService;