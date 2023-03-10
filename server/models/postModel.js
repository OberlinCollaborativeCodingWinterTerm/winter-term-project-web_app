const mongoose=require("mongoose")
const {ObjectId} = require("mongodb");
const Course = require("./courseModel");
const User = require("./userModel");

const groupSchema = new mongoose.Schema(
    {
        date: {type: String, required: true},
        location: {type: String, required: true},
        maximum: {type: Number, required: true, validate: {validator: (n) => (Number.isInteger(n) && n > 0)}},
        members: [{type: ObjectId, ref: "User"}]
    }
)

const Post=new mongoose.Schema(
    {
        postType: {type: String, enum: ["announcement", "question", "group"], default: "announcement"},
        author: {type: ObjectId, ref: "User", required: true},
        course: {type: ObjectId, ref: "Course", required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        flair: {type: String, required: true},
        tags: {type: [{type: String}], default: []},
        date: {
            type: Date,
            required: true
        },
        // Contents based on post type
        //announcementData: {},
        //questionsData: {},
        groupData: {type: groupSchema}
    }
)

Post.statics.getPost = async function(id) {
    const post = await this.findById(id).populate("author").populate("course").populate("groupData.members").exec();
    if (!post) {
        throw Error("Post does not exist");
    }
    return post;
}

Post.statics.getPosts = async function(courseId, userId, tags, flair) {
    let query = {};
    if (courseId) {
        query.course = courseId;
    }
    if (userId) {
        query.author = userId;
    }
    if (tags) {
        query.tags = {$all: tags};
    }
    if (flair) {
        query.flair = flair;
    }
    const posts = await this.find(query).populate("author").populate("course").populate("groupData.members").exec();
    if (!posts) {
        throw Error("Post with specified course id does not exist");
    }
    return posts;
}

Post.statics.createPost = async function(type, authorId, courseDepartment, courseNumber, title, description, tags, data) {
    if (!authorId || !courseDepartment || !courseNumber || !title || !description || !data) {
        //console.log(authorId, courseDepartment, courseNumber, title, description, data);
        throw Error("All data fields must be filled");
    }
    if (type !== "announcement" && type !== "question" && type !== "group") {
        throw Error("Invalid post type");
    }
    const course = await Course.getData((await Course.getId({department: courseDepartment, number: courseNumber})));
    if (!course) {
        throw Error("Course does not exist");
    }
    const author = await User.findById(authorId).exec();
    if (!author) {
        throw Error("Author user does not exist");
    }
    let postData = {};
    if (type.toLowerCase() === "group") {
        postData = {groupData: data};
        data.members.push(author._id);
    }
    return await this.create({postType: type, author: author._id, course: course._id, title: title, description: description, flair: "open", date: Date.now(), tags: tags, ...postData});
}

Post.statics.deletePost = async function(id) {
    const post = await this.findById(id).exec();
    if (!post) {
        throw Error("Post does not exist");
    }
    return await this.delete(id);
}

module.exports = mongoose.model("Post", Post);