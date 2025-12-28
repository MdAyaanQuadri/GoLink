import userLoginSchema from "../validation/userLogin.validation.js"
import { AppError } from "../error.js";
import userLoginService from "../services/userLogin.service.js";
const userLoginController = async (req,res,next)=>{
    try{
    const {data,success,error} = userLoginSchema.safeParse(req.body);
    if(!success){
        throw new AppError(
            {
                message:"invalid signup data",
                errorCode:"validation_error",
                statusCode:400,
                details:error.issues.map(issue => ({
                    path:issue.path.join("."),
                    code:issue.code,
                    message:issue.message,
                }))
            }
        )
    }
    const {token,response} = await userLoginService(data);
    return res.status(200).json({
        success:true,
        data:{
            token,
            user:{
                username:response.username,
                email:response.email,
                id:response._id.toString(),
            }
        }
    })
}catch(err){
    next(err)
}
}
export default userLoginController