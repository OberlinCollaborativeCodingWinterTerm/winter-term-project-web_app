const mongoose=require("mongoose")

const Course = new mongoose.Schema(
    {
        instructors: {type: [{first: String, last: String}], required: true},
        department: {type: String, required: true},
        number: {type: Number, required: true, validate: {
                validator: Number.isInteger
            }},
        fullName: {type: String, required: true}
    }
)