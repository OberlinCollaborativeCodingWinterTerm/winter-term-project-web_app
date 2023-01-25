// Contains functions to be used in the GET/POST/PATCH and other requests.
// The functions of interacting with the database are executed by using the mongoose models - one of them is in the models folder. So you perform read/get actions
// on the database from the models 

const User=require("../models/userModel")
const jwt=require("jsonwebtoken")

// id is a part of the payload
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '4d'}); 
}

const courseList = async(req, res) => {
    const {userId} = req.body;
    try {
        const data = await User.courseList(userId ?? req.user);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const addCourse = async(req, res) => {
    const {courseId} = req.body;
    try {
        const data = await User.addCourse(req.user, courseId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const removeCourse = async(req, res) => {
    const {courseId} = req.body;
    try {
        const data = await User.removeCourse(req.user, courseId);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getData = async(req, res) => {
    const {userId} = req.body;
    try {
        const data = await User.getData(userId ?? req.user);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Login user
// Async function to communicate with the database
const loginUser=async(req, res)=>{
    const {email, password}=req.body
    try {
        const user= await User.login(email, password)
        const token=createToken(user._id); 
        res.status(200).json({_id: user._id, firstName: user.firstName, lastName: user.lastName, email, token})
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
        res.status(200).json({_id: user._id, firstName, lastName, email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports={signupUser, loginUser, getData, courseList, addCourse, removeCourse}