import {Router} from "express";
const urlShortnerRoutes = Router();

import urlShortnerController from "../../controllers/url/urlShortner.controller.js";

urlShortnerRoutes.post("/urlShortner",urlShortnerController);

export default urlShortnerRoutes;