import { port } from "./config/env.js";
import mongoConnect from "./config/db.js"
import app from "./app.js"
const serverStart = async () =>{
    try{
        await mongoConnect();
        app.listen(port,()=>{
            console.log("server started ........")
        })
    }catch(e){
        console.error("Something is wrong:"+e.message);
        process.exit(1);
    }
}
serverStart()