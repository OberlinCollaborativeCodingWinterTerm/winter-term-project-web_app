const express=require("express");

// router is an instance of the express router.
// router will be added as a middleware and will take control of requests.
const router=express.Router();

const validateToken = require("../middleware/auth");

//Controller functions
const {signupUser, loginUser, getData} = require("../controllers/userController");

// Function is fired when the default parameter is the path

// Sending login data to the server
router.post("/login", loginUser)

// Sending signup data to the server; /user/register 
router.post("/register", signupUser)

router.post("/data", validateToken, getData)

module.exports = router;

