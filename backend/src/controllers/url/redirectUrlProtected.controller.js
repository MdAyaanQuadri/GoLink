
import urlProtectedService from "../../services/urlProtected.service.js"
const redirectUrlProtectedController = async(req,res,next)=>{
 try{
    
    
    const data = req.body;
    const orignalUrl = await urlProtectedService(data);

    
    return res.redirect(307,orignalUrl)
 }catch(err){
    next(err)
 }
}

export default redirectUrlProtectedController;