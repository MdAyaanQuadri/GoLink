import { AppError } from "../error.js";
import userUpdateService from "../services/userUpdate.service.js";
import userProfileUpdateSchema from "../validation/userProfileUpdate.validation.js";
const userProfileUpdateController = async(req,res,next) => {
        try{const user = req.user;
        const {data,success,error} = await userProfileUpdateSchema.safeParse(req.body);
        if(!success){
            throw new  AppError({
                statusCode:400,
                errorCode:"VALIDATION_ERROR",
                message:"invalid profile update data",
                details:error.issues.map(issue =>({
                    path:issue.path.join("."),
                    message:issue.message,
                    code:issue.code,
                }))
            })
        }
        const userUpdated  = await userUpdateService(user.id,data.oldPassword,data.newPassword);
        if(userUpdated){
            return res.status(200).json({
                success:true,
                message:"Password updated successfully",
            })
        }

    }catch(err){
            next(err)
        }
}

export default userProfileUpdateController;