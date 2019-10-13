const mongoose = require("mongoose")
const Schema = mongoose.Schema

const credits_schema = new Schema ({
    credits : {
        type : Number
    },
    student : {
        type : Schema.Types.ObjectId,
        ref : "Student"      
    }
}, { _id:false });
/**
 * 
 */
const enrollment_schema = new Schema({
    course : {
        type : Schema.Types.ObjectId,
		ref : "Course"
    },
    students : [
        { 
            type: credits_schema,
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