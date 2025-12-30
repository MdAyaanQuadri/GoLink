import z from "zod";
export const urlShema = z.object({
    orignalUrl: z
        .string()
        .transform((val) =>
            /^(https?:\/\/)/i.test(val) ? val : `https://${val}`
        ),
    expireDays: z.number(),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(32, "Password is too long")
        .regex(/[A-Z]/, "At least one uppercase letter required")
        .regex(/[a-z]/, "At least one lowercase letter required")
        .regex(/\d/, "At least one number required")
        .regex(/[@$!%*?&]/, "At least one special character required")
        .optional()
})
