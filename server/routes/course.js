// Initialize
const express=require("express");
const {createCourse, getId, getData} = require("../controllers/courseController");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("/create", verifyToken, createCourse);
router.post("/get-id", verifyToken, getId);
router.post("/get-data", verifyToken, getData)

module.exports = router;