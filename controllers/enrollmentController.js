const Enrollment =  require('../models/enrollment')
const cMessages = require('../constants/messages')
const cEnrollment = require('../constants/enrollment')
/**
 * 
 */
module.exports.list = (req, res) => {

}
/**
 * 
 */
module.exports.create = (req, res) => {
    if (  req.method == 'POST') {
        
        var enrollment_data = {
            course : req.query.course_id,
            students : req-query.student_id
        }

        var student = new Student( enrollment_data );

        enrollment.save ()
            .then ( 
                doc => {
                    var response_data = {
                        message : cMessages.SUCCESS,
                        data : {
                            enrollment : doc,
                            text : cEnrollment.STUDENT_CREATED
                        }
                    }
                    res.status( 200 ).json( response_data )
                },
                err => {
                    if ( err ) { 
                        var response_data = {
                            message : cMessages.ERROR,
                            data : {
                                error : err,
                                text : cEnrollment.STUDENT_NO_CREATED
                            }
                        }
                        res.status( 401 ).json( response_data )
                    }
                }
            )
    } else {
        var data_response = {
            message : cMessages.ERROR,
            data : {
                text : cMessages.FORBIDDEN
            }
        }   
        
        res.status( 401 ).json( data_response )      
    }
}