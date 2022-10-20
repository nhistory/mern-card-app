var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/foo', function(req, res, next) {
  res.send('respond with foo');
});

router.post('/register', (req,res) => {

  console.log(req.body)

  
  // get the email from the body of the request
  const email = req.body.email

  // query the db with User model to see if a document already exists 
  // with the submitted email
  // if exist...respond with 400 and in the response send back message that
  // user already exists.
  
  // replace the req,body.password value with the hashed equivalent
  
  // Use the user model to insert a new record.
  // may have a validation error
  
  // If the user was successfully created.
  
  // generate a json web token
  
  // send a response back to the client
  
  res.send('register')

})


router.post('/login', (req, res) => {

  // sample req.body could be { email: "joe@foo.com", password: "letmein" }

  // query the database using the User model to see
  // if there is a user with the provided email
    // if there is no returned user....respond with unauthorized response (401)

  // if there is a user....compare the submitted password with the user's password hash

  // if there is no match....respond with unauthorized response (401)

  // if there is a match....create a jwt send back in the response.

})

module.exports = router;
