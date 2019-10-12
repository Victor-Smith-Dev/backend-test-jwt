const cAuth = require('../constants/auth')
const cMessages = require('../constants/messages')

module.exports = (req, res, next) => {

  const bearerHeader = req.headers['authorization'];

  if ( typeof bearerHeader !== 'undefined' ) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken

    next();

  } else {

    const data_response = {
        message : cMessages.ERROR,
        data : {
            text : cAuth.UNAUTHORIZED
        }
    }   
    
    res.status( 401 ).json( data_response )
  }
  
}