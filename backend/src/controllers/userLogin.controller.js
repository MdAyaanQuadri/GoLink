import userLoginSchema from "../validation/userLogin.validation.js"
import { AppError } from "../error.js";
const userLoginController = async (err,req,res,next)=>{
    try{
    const {data,success,error} = userLoginSchema.safeParse(req.body);
    if(!success){
        throw new AppError(
            {
                message:"invalid signup data",
                errorCode:"validation_error",
                statusCode:400,
                details:error.issues.map(issue => ({
                    path:issue.path.join(""),
                    code:issue.code,
                    message:issue.message,
                }))
            }
        )
    }
     
}catch(err){
    next(err)
}
}
export default userLoginController