import express from "express"
const app = express();
import userAuthRouter from "./routes/userRoutes/userAuth.routes.js"
import userRouter from "./routes/userRoutes/user.routes.js";
import urlShortnerRoutes from "./routes/urlRoutes/urlShortner.routes.js"
import redirectUrlRoutes from "./routes/urlRoutes/redirectUrl.routes.js"
app.use(express.json());

app.use("/api/users",userAuthRouter);
app.use("/api/users",userRouter)
app.use("",redirectUrlRoutes);

app.use("/api/url/",urlShortnerRoutes);




















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