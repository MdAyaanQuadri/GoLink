import userSignupSchema from "../validation/userSignup.validation.js";
import userSignupService from "../services/userSignup.service.js";
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
    const token = await userSignupService(data);
    return res.status(201).json({
        success:true,
        token:token
    })
}catch(err){
    
    return res.status( 409 ).json({
        sucess:false,
        message:err.message,
    })
    
    
    
}
}
export default userSignupController