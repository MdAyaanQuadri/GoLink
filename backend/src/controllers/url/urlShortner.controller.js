import { safeParse } from "zod";
import { AppError } from "../../error.js";
import { urlShema } from "../../validation/url.validation.js"
import { urlShortnerService } from "../../services/urlShortner.service.js";
const urlShortnerController = async (req, res, next) => {
    try {
        const response = req.body;
        
const { data, success, error } = urlShema.safeParse(response);
if (!success) {
    throw new AppError({
        message: "enter correct url",
        errorCode: "VALIDATION_ERROR",
        statusCode: 400,
        details: error.issues.map(issue => ({
            path: issue.path.join("."),
            Code: issue.code,
            message: issue.message
        }))
    })
}
const shortenedUrl = await urlShortnerService(response,data.orignalUrl);

return res.status(201).json({
    sucess: true,
    shortenedUrl,
    orignalUrl:data.orignalUrl
})

    }catch (err) {
    next(err)
}
}
export default urlShortnerController;