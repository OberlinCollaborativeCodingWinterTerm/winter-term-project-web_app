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

Course.statics.getId = async function(department, number) {
    const course = await this.findOne({department: department, number: number}).exec();
    if (!course) {
        throw Error("Course does not exist");
    }
    return course._id;
}

Course.statics.createCourse = async function(department, number, fullName, instructors) {
    if (await this.findOne({department: department, number: number}).exec()) {
        throw Error("Course already exists");
    }
    return this.create({department: department, number: number, fullName: fullName, instructors: instructors});
}

module.exports = mongoose.model("Course", Course);