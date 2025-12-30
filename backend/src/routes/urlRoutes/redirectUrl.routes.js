import { Router } from "express"
const redirectUrlRoutes = Router()
import redirectUrlController from "../../controllers/url/redirectUrlShortner.controller.js"
import redirectUrlProtectedController from "../../controllers/url/redirectUrlProtected.controller.js"
redirectUrlRoutes.get("/:code",redirectUrlController)
redirectUrlRoutes.get("/api/url/protected",redirectUrlProtectedController)

export default redirectUrlRoutes 