const Course =  require('../models/course')
const cMessages = require('../constants/messages')
const cCourse = require('../constants/course')
/**
 * 
 */
module.exports.list = (req, res) => {
    if ( req.method == 'GET' ) {
        Course.find({}, ( err, docs ) => {
            if ( err ) {
                var data_response = {
                    message : cMessages.ERROR,
                    data : {
                        error : err,
                        text : cCourse.LIST_ERROR
                    }
                 }

                 res.status( 500 ).json( data_response )
            } else {
                var data_response = {
                    message : cMessages.SUCCESS,
                    data : {
                        courses : docs
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
        
        var course_data = {
            name : req.query.name
        }

        var course = new Course( course_data );

        course.save ()
            .then ( 
                doc => {
                    var response_data = {
                        message : cMessages.SUCCESS,
                        data : {
                            course : doc,
                            text : cCourse.COURSE_CREATED
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
                                text : cCourse.COURSE_NO_CREATED
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