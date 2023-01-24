const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const validator=require("validator")

// Defines the structure for the objects saved in the database
const User=new mongoose.Schema(
   {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true}, 
        password: {type: String, required: true},
   }
)

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
   const user=await this.create({firstName, lastName, email, password: hash})
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

