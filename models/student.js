const mongoose = require("mongoose")
const Schema = mongoose.Schema

var student_schema = new Schema({
    name : String
})

var Student = mongoose.model("Student", student_schema)

module.exports = Student