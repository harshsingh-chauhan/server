const jwt = require("jsonwebtoken");
const UserModel = require("../model/User")

// const checkAuth=(req,res,next)=>{
//     console.log("hello auth");
// }
// module.exports=checkAuth

const checkAuth= async(req,res,next)=>{
    const token = req.cookies.token;
    // console.log(token)
    if(!token) return res.status(401).json({message:"Unautorized"});
    try{
        const decode=jwt.verify(token,'kuchbi@34')
        // console.log(decode)

        const user = await UserModel.findById(decode.ID);
        if(!user) return res.status(401).json({message:"user not find"});
        req.user= user;
        console.log(req.user)
        next();
    }catch(error){
        console.log(error)
        res.status(401).json({message:"invalid token"});
    }
}
module.exports=checkAuth