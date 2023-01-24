const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const verifyToken = async(req, res, next) => {
    const token = req.body.token;
    if (!token) {
        return res.status(403).send("No token provided");
    }
    try {
        req.user = jwt.verify(token, process.env.SECRET)._id;
        if (!(await User.findById(req.user).exec())) {
            return res.status(401).send("Invalid token provided"); // token contains no longer existing user
        }
    } catch (err) {
        return res.status(401).send("Invalid token provided"); // token has expired
    }
    return next();
};

module.exports = verifyToken;