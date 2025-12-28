import bcrypt from "bcrypt"
export const hashedPassword = async (password)=>{
    // returns hashed password
    return await bcrypt.hash(password,10);
}
export const comparePassword = async (password,hashedPassword)=>{
    // return boolean
    return await bcrypt.compare(password,hashedPassword);
}