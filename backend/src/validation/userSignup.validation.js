import z from "zod"
const userSignupSchema = z.object(
    {
        username:z
        .string()
        .min(3,"username must be at least 3 charecters")
        .max(30,"username is too long")
        .trim(),
        email:z
        .email("invalid Email address")
        .transform((val)=>val.toLowerCase()),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .max(32,"Password is too long")
            .regex(/[A-Z]/, "At least one uppercase letter required")
            .regex(/[a-z]/, "At least one lowercase letter required")
            .regex(/\d/, "At least one number required")
            .regex(/[@$!%*?&]/, "At least one special character required")
    }
)
export  default userSignupSchema;