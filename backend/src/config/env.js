import dotenv from "dotenv";
dotenv.config();
export const port = process.env.PORT ;
export const mongo_uri = process.env.MONGO_URI;
export const jwt_secret = process.env.JWT_SECRET;
export const base_url = process.env.BASE_URL;