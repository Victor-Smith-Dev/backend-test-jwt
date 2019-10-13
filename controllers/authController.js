const User =  require('../models/users')
const cMessages = require('../constants/messages')
const cAuth = require('../constants/auth')
const jwt = require('jsonwebtoken')
/**
 * 
 */
module.exports.login = ( req, res ) => {
    if ( req.method == 'POST') {

        const user_data = {
            email : req.query.email,
            password : req.query.password
        }
        
        User.findOne(user_data, ( err, doc ) => {
			if ( doc ) {
                jwt.sign({ user_data }, process.env.JWTKEY, { expiresIn: 60 * 60 * 24 }, (err, token) => {

                    var data_response = {
                        message : cMessages.SUCCESS,
                        data : {
                            token : token
                        }
                    }   
                    
                    res.status( 200 ).json( data_response )   
                });			
			} else {
                var data_response = {
                    message : cMessages.ERROR,
                    data : {
                        text : cAuth.USER_NOT_FOUND
                    }
                }   
                
                res.status( 401 ).json( data_response )   
			}
        });
        
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
module.exports.register = ( req, res ) => {
    if ( req.method == 'POST' ) {
        
        const { name, email, password } = req.query;
        var user_data = {
            name, email, password
        }

        var user = new User( user_data );

        user.save ()
            .then ( 
                 saved_user => {
                    var response_data = {
                        message : cMessages.SUCCESS,
                        data : {
                            user : saved_user,
                            text : cAuth.USER_REGISTERED
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
                                text : cAuth.USER_NO_REGISTERED
                            }
                        }
                        res.status( 401 ).json( response_data )
                    }
                }
            )
    } else {
        var response_data = {
            message : cMessages.ERROR,
            data : {
                text :  cMessages.FORBIDDEN
            }
        }

        res.status( 403 ).json( response_data )
    }
}
