const validateToken = (req, res, next) => {

    // check for existance of a token in the request header (x-auth-token)

    // if it doesn't exist, send response 401 unauthorized

    // if it does exist, make sure it is valid...if not send 401, 
    // otherwise allow request to proceed on

    // TEMPORARY
    // res.send('You reached the validate token middleware')
    res.send(`The token is ${req.get('x-auth-token')}`)

}

module.exports = validateToken