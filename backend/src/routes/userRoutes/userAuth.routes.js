import {Router} from "express"
const userAuthRouter = Router();


import userSignupController from "../../controllers/userSignup.controller.js"
import userLoginController from "../../controllers/userLogin.controller.js"

userAuthRouter.post("/signup",userSignupController);
userAuthRouter.post("/login",userLoginController);


export default userAuthRouter
