import {Router} from "express"
const userAuthRouter = Router();

import userSignupController from "../controllers/userSignup.controller.js"
userAuthRouter.post("/signup",userSignupController);
export default userAuthRouter
