import userSignupSchema from "../validation/userSignup.validation.js";
import userSignupService from "../services/userSignup.service.js";
import { AppError } from "../error.js";
const userSignupController = async (req,res)=>{
    try{
        // checking if that the request fulfilled the userSignup Schema
    const {data,success,error } = await userSignupSchema.safeParse(req.body);
    // if not then sucess is false
    if(!success) {
        return res.status(400).json({
            error: error.errors,
        })
    }
    const token = userSignupService(data);
    return res.status(201).json({
        success:true,
        token:token
    })
}catch(err){
    if(err instanceof AppError){
    return res.status(err.statusCode).json({
        sucess:false,
        message:err.message,
    }
    )
    }
    return res.status(500).json({
        sucess:false,
        error:"internal Server error"
    })
}
}
export default userSignupController