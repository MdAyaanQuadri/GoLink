import urlModel from "../models/url.model.js"
import { comparePassword } from "../utils/hash.utils.js"
import { AppError } from "../error.js"
const urlProtectedService = async({shortCode,password})=>{
    const response = await urlModel.findOne(
        {
            shortCode
        }
    )
    if(!response){
        throw new AppError({
                    statusCode:400,
                    message:"give correct url",
                    errorCode:"INVALID_URL"
                })
    }
    const correctPassword = await comparePassword(password,response.password);
    if(!correctPassword){
        throw new AppError({
                    statusCode:401,
                    message:"enter correct passsword",
                    errorCode:"INCORRECT_PASSWORD"
                })
    }
    
    return response.orignalUrl
}

export default urlProtectedService