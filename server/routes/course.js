// Initialize
const express=require("express");
const {createCourse, getId} = require("../controllers/courseController");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("/create", verifyToken, createCourse);
router.post("/get-id", verifyToken, getId);

module.exports = router;