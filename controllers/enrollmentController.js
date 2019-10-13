const mongoose = require("mongoose")
const Enrollment =  require('../models/enrollment')
const cMessages = require('../constants/messages')
const cEnrollment = require('../constants/enrollment')

/**
 * Students con credits superior a 50
 */
module.exports.listStudentsWithCredits50 = async (req, res) => {
    try {        
        const result = await Enrollment.find({'students.credits': {$gt: 50}})
        .populate('course', 'name' )
        .populate('students.student', 'name')
        .sort({ name: 1 })
        .exec();

        res.status(200).json(result);
    } catch (error) {
        res.status(500);
    }
}

/**
 * Students, sus courses y créditos
 */
module.exports.listByStudentId = async (req, res) => {
    const { id } = req.params
    console.log(id);
    
    try {        
        const result = await Enrollment.find({'students.student': id})
        .populate('course', 'name' )
        .sort({ name: 1 })
        .exec();

        res.status(200).json(result);
    } catch (error) {
        res.status(500);
    }
}
/**
 * Course, sus students y credits
 */
module.exports.listCourseStudentsCredits = async (req, res) => {
    let { id } = req.params
    id = mongoose.Types.ObjectId(id)
    try {        
        const result = await Enrollment.find({'course': id})
        .populate('course', 'name' )
        .populate('students.student', 'name')
        .sort({ name: 1 })
        .exec();

        res.status(200).json(result);
    } catch (error) {
        res.status(500);
    }
}
/**
 * Course, sus students y credits
 */
module.exports.list = async (req, res) => {
    let { id } = req.params
    id = mongoose.Types.ObjectId(id)
    try {        
        const result = await Enrollment.find()
        .populate('course', 'name' )
        .populate('students.student', 'name')
        .exec();

        res.status(200).json(result);
    } catch (error) {
        res.status(500);
    }
}
/**
 * 
 */
module.exports.create = async (req, res) => {
    const { course , students } = req.body;
        
    const enrollment = new Enrollment({
        course, students
    });

    try {

        const result = await enrollment.save();
        console.log(result);
        res.status( 201 ).json({});

    } catch ( error ) {
        console.log( error );
        res.status( 500 );
    }
}

module.exports.deleteAll = async (req, res) => {

}
