import { Router } from "express";
import userAuthMiddleware from "../../middlewares/userAuth.middleware.js";
import userDetailsController from "../../controllers/userDetails.controller.js";
import userProfileUpdateController from  "../../controllers/userProfileUpdate.controller.js"
const userRouter = Router();

userRouter.use(userAuthMiddleware);
userRouter.get("/me",userDetailsController);
userRouter.patch("/me",userProfileUpdateController)
export default userRouter