import {urlNotProtectedService} from "../../services/urlNotProtected.service.js"
const redirectUrlController = async(req,res,next)=>{
    try{
        const shortCode = req.params.code;
        const {secure,orignalUrl} = await urlNotProtectedService(shortCode)
        if(secure){
            // return res.redirect(307, ""); // this will redirect to a front end url
            console.log("hello");
            
        }
        else{
            
            return res.redirect(307, orignalUrl);
        }
    }catch(err){
        next(err)
    }
}


export default redirectUrlController;