import urlModel from "../models/url.model.js";
import { randomString } from "../utils/cryptoRandomString.util.js";
import { base_url } from "../config/env.js";
import { hashedPassword } from "../utils/hash.utils.js"
export const urlShortnerService = async (response,orignalUrl) => {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000 * response.expireDays);
    const shortCode = randomString();
    const hashPassword = response.passwordProtected ? await hashedPassword(response.password) : null;
    await urlModel.create({
        orignalUrl,
        password: hashPassword,
        passwordProtected: response.passwordProtected,
        expiresAt,
        shortCode,
    })
    const shortUrl = base_url + "/" + shortCode;
    
    return shortUrl;
}