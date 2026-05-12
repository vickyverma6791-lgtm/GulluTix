import User from "../models/User.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs"
import generateToken from "../utils/generateToken.js";



export const registerUser = asyncHandler(async(req,res)=>{

    const {name,email,password} = req.body

    const userExists = await User.findOne({email})

    if(userExists) return res.status(400).json({message:"User already exists"})
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    
    const user = await User.create({
        name,email,
        password:hashedPassword
    })
    res.status(201).json({ 
    _id: user._id,
    name: user.name,
    email: user.email,
    })
})


export const loginUser = asyncHandler(async(req,res)=>{
    const{email,password} = req.body 

    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({message:"User not found"})
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(401).json({message:"Wrong password"})
    }
    const token = generateToken(user._id)

    res.json({
        name:user.name,
        email:user.email,
        role :user.role,
        token 
    })
})