import z from "zod"
const userProfileUpdateSchema = z.object({
    oldPassword:z.string().min(8,"Password is too Short")
    ,newPassword:z
                .string()
                .min(8, "Password must be at least 8 characters")
                .max(32,"Password is too long")
                .regex(/[A-Z]/, "At least one uppercase letter required")
                .regex(/[a-z]/, "At least one lowercase letter required")
                .regex(/\d/, "At least one number required")
                .regex(/[@$!%*?&]/, "At least one special character required"),
    confirmPassword: z.string(),}
).refine((data) => data.newPassword === data.confirmPassword ,{
    path:["confirmPassword"],
    message:"password donot match"
})
export default userProfileUpdateSchema