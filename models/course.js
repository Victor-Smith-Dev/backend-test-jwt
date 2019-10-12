const mongoose = require("mongoose")
const Schema = mongoose.Schema
/**
 * 
 */
var course_schema = new Schema({
    name : {
        type : String, 
		required : "El nombre del curso es obligatorio",
        unique: true
    }
})
/**
 * 
 */
var Course = mongoose.model("Course", course_schema)
/**
 * 
 */
module.exports = Course