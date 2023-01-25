// Initialize
const express=require("express");
const verifyToken = require("../middleware/auth");
const router=express.Router();

// Routes
router.post("", async(req, res) => verifyToken(req, res, () => {
    return res.status(200).send("Token is valid");
}));

module.exports = router;