const express=require("express");

// router is an instance of the express router.
// router will be added as a middleware and will take control of requests starting with path /record.
const router=express.Router(); 

//Controller functions
const {signupUser, loginUser} = require("../controllers/userController");

// Function is fired when the default parameter is the path
router.get("/", (req, res) => {
  res.json({mssg: "GET all users"})
}) 

// Sending login data to the server 
router.post("/login", loginUser)

// Sending signup data to the server 
router.post("/signup", signupUser)

module.exports = router;

