import userSignupSchema from "../validation/userSignup.validation.js";
import userSignupService from "../services/userSignup.service.js";
import { AppError } from "../error.js";
const userSignupController = async (req,res,next)=>{
    try{
        // checking if that the request fulfilled the userSignup Schema
    const {data,success,error } = await userSignupSchema.safeParse(req.body);
    // if not then sucess is false
    if(!success) {
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
    const {token,response} = await userSignupService(data);
    return res.status(201).json({
        success:true,
        data:{
            token,
            user:{
                username:response.username,
                email:response.email,
                id:response._id.toString()
            }
        }
    

    })
}catch(err){
    next(err)
}
}
export default userSignupController