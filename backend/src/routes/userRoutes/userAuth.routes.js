import {Router} from "express"
const userAuthRouter = Router();


import userSignupController from "../../controllers/user/userSignup.controller.js"
import userLoginController from "../../controllers/user/userLogin.controller.js"

userAuthRouter.post("/signup",userSignupController);
userAuthRouter.post("/login",userLoginController);


export default userAuthRouter
