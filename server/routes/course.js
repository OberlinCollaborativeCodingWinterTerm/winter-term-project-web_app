// Initialize
const express=require("express");
const createCourse = require("../controllers/courseController");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("/create", verifyToken, createCourse);

module.exports = router;