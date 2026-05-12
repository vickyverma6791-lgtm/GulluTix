import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken"


const verifyJwt = asyncHandler(async(req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message:"No token"
        })
    }
    const decode =  jwt.verify(
        token.split(" ")[1],
        process.env.JWT_SECRET
    )
    req.user = await User.findById(decode.id)
    next()
})