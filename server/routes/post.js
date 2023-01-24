// Initialize
const express=require("express");
const {createPost, deletePost, getPost, getPosts} = require("../controllers/postController");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("/create", verifyToken, createPost)
router.post("/delete", verifyToken, deletePost)
router.post("/get", verifyToken, getPost)
router.post("/get-list", verifyToken, getPosts)

module.exports = router;