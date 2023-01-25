const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator=require("validator")
const {ObjectId} = require("mongodb");
const Course = require("./courseModel");

// Defines the structure for the objects saved in the database
const UserData = new mongoose.Schema(
    {
       courses: {type: [{type: ObjectId, ref: "Course"}], default: []}
    }
)

const User=new mongoose.Schema(
   {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true}, 
        password: {type: String, required: true},
        userData: {type: UserData, required: true}
   }
)

User.statics.courseList = async function(userId) {
   const user = await this.findById(userId).exec();

   if (!user) {
      throw Error("User does not exist");
   }
   const courseList = [];
   for (const course of user.userData.courses) {
      courseList.push(await Course.getData(course));
   }
   return courseList;
}

User.statics.addCourse = async function(userId, courseId) {
   const user = await this.findById(userId).exec();
   if (!user) {
      throw Error("User does not exist");
   }
   const course = await Course.findById(courseId).exec();
   if (!course) {
      throw Error("Course does not exist");
   }
   course.studentCount++;
   course.save();
   user.userData.courses.push(course._id);
   user.save((err, result) => {
      if (err) {
         throw err;
      } else {
         return result.userData.courses;
      }
   });
}

User.statics.removeCourse = async function(userId, courseId) {
   const user = await this.findById(userId).exec();
   if (!user) {
      throw Error("User does not exist");
   }
   if (!user.userData.courses.includes(courseId)) {
      throw Error("User is not a member of the course");
   }
   const course = await Course.findById(courseId).exec();
   user.userData.courses.splice(user.userData.courses.indexOf(courseId));
   user.save((err, result) => {
      if (err) {
         throw err;
      } else {
         course.studentCount--;
         course.save();
         return result.userData.courses;
      }
   });
}

User.statics.getData = async function(id) {
   const user = await this.findById(id).exec();
   if (!user) {
      throw Error("User does not exist");
   }
   return {firstName: user.firstName, lastName: user.lastName, ...user.userData};
}

// Static signup method
User.statics.signup = async function(firstName, lastName, email, password) {
  
   // Validation
   if (!firstName || !lastName || !email || !password){
      throw Error("All fields must be filled")
   }
   if (!validator.isEmail(email)){
      throw Error("Your email format is incorrect")
   }
   if (!validator.isStrongPassword(password)){
      throw Error("Password not strong enough")
   }
   const exists=await this.findOne({email}) // If email exists, then the exists will have a value
   if (exists){
      throw Error("Email already in use")
   }
   const salt=await bcrypt.genSalt(5); // Salt for hashing passwords
   const hash=await bcrypt.hash(password, salt) // Hashed password
   const userData = {
      courses: []
   }
   const user=await this.create({firstName, lastName, email, password: hash, userData})
   return user
}

// Static login method
User.statics.login = async function(email, password) {
   // Validation
   if (!email || !password){
      throw Error("All fields must be filled")
   }
   const user=await this.findOne({email}) 
   if (!user){
      throw Error("Incorrect email")
   }
   const match=await bcrypt.compare(password, user.password)
   if (!match){
      throw Error("Incorrect password")
   }
   return user
}

module.exports=mongoose.model("User", User)

