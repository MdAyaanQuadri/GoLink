import z from "zod"

const userLoginSchema = z.object({
    email:z
    .email("Invalid email address")
    .transform((val)=> val.toLowerCase()),
    password:z.string()
})

export default userLoginSchema;