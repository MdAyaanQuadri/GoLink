import { jwtVerify } from "../utils/jwt.utils.js";
import { userModel } from "../models/user.model.js";
import { AppError } from "../error.js";
import { email } from "zod";

const userAuthMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new AppError({
                statusCode: 401,
                errorCode: "AUTH_TOKEN_MISSING",
                message: "Authentication token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decodedToken = jwtVerify(token);

        const user = await userModel.findById(decodedToken.userId);

        if (!user) {
            throw new AppError({
                statusCode: 401,
                errorCode: "AUTH_USER_NOT_FOUND",
                message: "Authentication failed",
                
            });
        }

        req.user = {
            username : user.username,
            email:user.email,
            id:user._id.toString(),
            role:user.role,
        };   
        next();            
    } catch (err) {
        next(err);
    }
};

export default userAuthMiddleware;