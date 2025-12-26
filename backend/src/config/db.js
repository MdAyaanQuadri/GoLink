import mongoose from "mongoose";
import { mongo_uri } from "./env.js";
import moongoose from "mongoose"
const mongoConnect = async ()=>{
    try{
    await mongoose.connect(mongo_uri);
    console.log("db is sucessflully connected");
}catch(e){
    console.error("db did not connect :"+ e.message)
}
}
export default mongoConnect