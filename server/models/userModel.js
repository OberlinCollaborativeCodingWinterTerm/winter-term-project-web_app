const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")

// Defines the structure for the objects saved in the database
const User=new mongoose.Schema(
   {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true}, 
        password: {type: String, required: true},
   }
)

// Static signup method
User.statics.signup = async function(name, email, password) {
   const exists=await this.findOne({email}) // If email exists, then the exists will have a value
   if (exists){
      throw Error("Email already in use")
   }
   const salt=await bcrypt.genSalt(5); // Salt for hashing passwords
   const hash=await bcrypt.hash(password, salt) // Hashed password
   const user=await this.create({name, email, password: hash})
   return user
}

module.exports=mongoose.model("userModel", User)

