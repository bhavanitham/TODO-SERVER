import {User} from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

//REGISTER USER

const registerUser = async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const existingUser = await User.findOne({
            $or:[{username},{email}]
        })
        if(existingUser){
            if(existingUser.username === username){
                return res.status(400).json({
                  message:"Username already Exists"
             })
            }
            if(existingUser.email === email){
                return res.status(400).json({
                    message:"email already exists"
            })
        }}else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User(
                {username,
                 email,
                 password:hashedPassword})
            await newUser.save()

            res.status(201).json({
                message:"User created successfully",
                user:{username,email}
            })

        }

    }
    catch(e){
        console.log(e)
        res.status(500).json({
            message:"Register failed,Try again"
        })
    }
}

//LOGIN USER

const loginUser = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username})
        if(!user){
            res.status(404).json({
                message:"username not found"
            })
            const pass = await bcrypt.compare(password,user.password);
            if(!pass){
                res.status(404).json({
                    message:"password wrong"
                })
            }
        }
        else{
            const token = jwt.sign({id:user._id,username:user.username},process.env.SECRET_KEY)
            res.status(200).json({
                message:"login Successfull",
                token:token
            })
        }
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            message:"Login failed Try again"
        })
    }
}

export {registerUser,loginUser}