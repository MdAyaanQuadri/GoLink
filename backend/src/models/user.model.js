import mongoose, { mongo } from "mongoose";
import { email } from "zod";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const user = new Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})
export const userModel = mongoose.model("users",user);