import express from "express"
const app = express();
import userAuthRouter from "./routes/userAuth.router.js"
app.use(express.json());
app.use("/api/users",userAuthRouter);
app.get("/",async (req,res)=>{
    res.send("api is running!!");
})
export default app;