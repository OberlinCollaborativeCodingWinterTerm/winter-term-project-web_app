// Contains functions to be used in the GET/POST/PATCH and other requests.
// The functions of interacting with the database are executed by using the mongoose models - one of them is in the models folder. So you perform read/get actions
// on the database from the models 

const User=require("../models/userModel")

//Login user
// Async function to communicate with the database
const loginUser=async(req, res)=>{
    res.json({mssg: "login user"})
}

// Signup user
const signupUser=async(req, res)=>{
    const {name, email, password}=req.body 
    try {
        const user= await User.signup(name, email, password)
        // res.status(200) means that the request has succeded 
        res.status(200).json({email, user})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports={signupUser, loginUser}