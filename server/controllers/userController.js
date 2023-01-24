// Contains functions to be used in the GET/POST/PATCH and other requests.
// The functions of interacting with the database are executed by using the mongoose models - one of them is in the models folder. So you perform read/get actions
// on the database from the models 

const User=require("../models/userModel")
const jwt=require("jsonwebtoken")

// id is a part of the payload
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '4d'}); 
}

//Login user
// Async function to communicate with the database
const loginUser=async(req, res)=>{
    const {email, password}=req.body
    try {
        const user= await User.login(email, password)
        const token=createToken(user._id); 
        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

// Signup user
const signupUser=async(req, res)=>{
    const {firstName, lastName, email, password}=req.body 
    try {
        const user= await User.signup(firstName, lastName, email, password)
        const token=createToken(user._id);
        // res.status(200) means that the request has succeded 
        res.status(200).json({firstName, lastName, email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports={signupUser, loginUser}