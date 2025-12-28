import jwt from "jsonwebtoken";
import { jwt_secret } from "../config/env.js"
import { AppError } from "../error.js";
export const jwtSign = (userId) => {
    // returns token
    return jwt.sign({ userId }, jwt_secret, { expiresIn: "7d" });
}
export const jwtVerify = (token) => {
    try {
        // returns decoded token
        return jwt.verify(token, jwt_secret);
    } catch (err) {
        if (err.name === "TokenExpiredError") {
            throw new AppError({
                message: "Session expired. Please login again.",
                statusCode: 401,
                errorCode: "AUTH_TOKEN_EXPIRED"
            });
        }

        // 🔴 TOKEN INVALID
        if (err.name === "JsonWebTokenError") {
            throw new AppError({
                message: "Invalid authentication token.",
                statusCode: 401,
                errorCode: "AUTH_TOKEN_INVALID"
            });
        }

        // fallback (rare)
        throw new AppError({
            message: "Authentication failed",
            statusCode: 401,
            errorCode: "AUTH_FAILED"
        });
    }
}