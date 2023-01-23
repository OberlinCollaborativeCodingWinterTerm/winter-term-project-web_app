const mongoose=require("mongoose")
const {ObjectId} = require("mongodb");

const AnnouncementPost=new mongoose.Schema(
    {
        author: {type: ObjectId, ref: "User", required: true},
        course: {type: ObjectId, ref: "Course", required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        flair: {type: String, required: true},
        tags: [{type: String}],
        date: {
            type: Date,
            default: Date.now
        },
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    }
)