const cAuth = require('../constants/auth')
const cMessages = require('../constants/messages')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {

  var token = req.headers['authorization']

  if ( !token ) {
    const data_response = {
      message : cMessages.ERROR,
      data : {
       text : cAuth.UNAUTHORIZED
      }
    }   

    res.status( 401 ).json( data_response )
  } else {
    token = token.replace('Bearer ', '')

    jwt.verify ( token, process.env.JWTKEY, function(err, user) {
      if ( err ) {
        const data_response = {
          message : cMessages.ERROR,
          data : {
           text : cAuth.INVALID_PAYLOAD
          }
        }  
        res.status( 400 ).json( data_response )
      } else {
        next();
      }
    }) 
  }
  
}