const Post = require("../models/postModel");

const createPost = async(req, res) => {
    const {type, courseDepartment, courseNumber, title, description, tags, data} = req.body;
    try {
        const newPost = await Post.createPost(type, req.user, courseDepartment, courseNumber, title, description, tags, data);
        res.status(200).json(newPost);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deletePost = async(req, res) => {
    const {postId} = req.body;
    try {
        const deleted = await Post.deletePost(postId);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {createPost, deletePost};