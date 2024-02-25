const adminMiddleware = async(req,res,next)=>{
try {
    console.log(req.user)
    const admin = req.user.isAdmin;
    if(!admin){
        return res.status(403).json({msg:"Not a Admin"})
    }
//  return res.status(200).json({msg:req.user})
    next()
} catch (error) {
   next(error) 
}


}
module.exports = adminMiddleware;