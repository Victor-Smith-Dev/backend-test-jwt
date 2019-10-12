const Student = require('../models/student')
const cMessages = require('../constants/messages')
const cStudent = require('../constants/student')
/**
 * 
 */
module.exports.list = (req, res) => {
    if ( req.method == 'GET' ) {
        Student.find({}, ( err, docs ) => {
            if ( err ) {
                var data_response = {
                    message : cMessages.ERROR,
                    data : {
                        error : err,
                        text : cStudent.LIST_ERROR
                    }
                 }

                 res.status( 500 ).json( data_response )
            } else {
                var data_response = {
                    message : cMessages.SUCCESS,
                    data : {
                        students : docs
                    }
                 }

                 res.status( 200 ).json( data_response )
            }
        })
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
/**
 * 
 */
module.exports.create = (req, res) => {
    if (  req.method == 'POST') {
        
        var student_data = {
            name : req.query.name
        }

        var student = new Student( student_data );

        student.save ()
            .then ( 
                doc => {
                    var response_data = {
                        message : cMessages.SUCCESS,
                        data : {
                            student : doc,
                            text : cStudent.STUDENT_CREATED
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
                                text : cStudent.STUDENT_NO_CREATED
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