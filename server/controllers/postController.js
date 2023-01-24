const Post = require("../models/postModel");

const getPost = async(req, res) => {
    const {postId} = req.body;
    try {
        const post = await Post.getPost(postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getPosts = async(req, res) => {
    const {courseId, authorId} = req.body;
    try {
        const posts = await Post.getPosts(courseId, authorId);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

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

module.exports = {createPost, deletePost, getPost, getPosts};