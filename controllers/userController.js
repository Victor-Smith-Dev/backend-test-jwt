const User =  require('../models/users')
const cMessages = require('../constants/messages')
const cUsers  = require('../constants/user')

module.exports.list = (req, res) => {
    if ( req.method == 'GET' ) {
        User.find({}, ( err, docs ) => {
            if ( err ) {
                var data_response = {
                    message : cMessages.ERROR,
                    data : {
                        error : err,
                        text : cUsers.LIST_ERROR
                    }
                 }

                 res.status( 500 ).json( data_response )
            } else {
                var data_response = {
                    message : cMessages.SUCCESS,
                    data : {
                        users : docs
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