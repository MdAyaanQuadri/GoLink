import mongoose from "mongoose";
import moongoose,{ Schema } from "mongoose";
import { boolean } from "zod";
const urlSchema = new Schema({
    orignalUrl:{
        type:String},
    expiresAt:{
        type:Date
    },
    shortCode:{
        type:String
    },
    password:{
        type:String
    },
    passwordProtected: {
        type:Boolean,
        default:false
    }
})
const urlModel = mongoose.model("Urls",urlSchema);
export default urlModel;