import express from "express"
const app = express();
import userAuthRouter from "./routes/userAuth.router.js"
app.use(express.json());
app.use("/api/users",userAuthRouter);
app.get("/",async (req,res)=>{
    res.send("api is running!!");
})
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const errorCode = err.errorCode || "INTERNAL_SERVER_ERROR";

  const message =
    statusCode === 500
      ? "Something went wrong"
      : err.message;

  res.status(statusCode).json({
    success: false,
    error: {
      message ,
      errorCode:errorCode || "UNKNOWN_ERROR",
      details: err.details || null
    }
  });
});
export default app;