// Initialize
const express=require("express");
const {createPost, deletePost} = require("../controllers/postController");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("/create", verifyToken, createPost)

router.post("/delete", verifyToken, deletePost)

module.exports = router;