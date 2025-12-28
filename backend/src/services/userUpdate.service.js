import { AppError } from "../error.js";
import { userModel } from "../models/user.model.js";
import {comparePassword,hashedPassword} from "../utils/hash.utils.js"
const userUpdateService = async (id,oldPassword,newPassword)=>{
    const user = await userModel.findById(id);
    const correctPassword =  await comparePassword(oldPassword,user.password);
    if(!correctPassword){
        throw new AppError({
            statusCode:401,
            errorCode:"INVALID_PASSWORD",
            message:"incorrect old password "
        })
    }
    const newHashPassword = await hashedPassword(newPassword);
    user.password = newHashPassword;
    await user.save();
    return true;
}
export default userUpdateService;