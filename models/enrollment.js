const mongoose = require("mongoose")
const Schema = mongoose.Schema
/**
 * 
 */
var enrollment_schema = new Schema({
    course : {
        type : Schema.Types.ObjectId,
		ref : "Course"
    },
    students : [
        {
            type : Schema.Types.ObjectId,
		    ref : "Student"        
        }
    ]
})
/**
 * 
 */
var Enrollment = mongoose.model("Enrollment", enrollment_schema)
/**
 * 
 */
module.exports = Enrollment