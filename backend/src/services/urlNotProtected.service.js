import { AppError } from "../error.js";
import urlModel from "../models/url.model.js";

export const urlNotProtectedService = async (shortCode) => {
    
    const response  = await urlModel.findOne({
        shortCode
    })
    if(!response){
        throw new AppError({
            statusCode:400,
            message:"give correct url",
            errorCode:"INVALID_URL"
        })
    }
    const orignalUrl = response.orignalUrl;
    const secure = response.passwordProtected
    return {orignalUrl,secure};
}