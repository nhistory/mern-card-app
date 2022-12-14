var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// import the User model
const User = require('../../models/user');
const Login = require('../../models/login');
const Signin = require('../../models/signin');

/* GET users listing. */
router.get('/', function (req, res) {
  // res.send('respond with a resource');

  User.find({}, (err, users) => {
    //handle if err occurred
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred');
    }

    console.log(users);
    res.send(users);
  });
});

// GET ONE USER BY ID
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, oneUser) => {
    if (err) {
      return res.status(400).send(`Error: ${err.message}`);
    }

    if (!oneUser) {
      return res.status(404).send();
    }
  });
});

/* POST user data*/
router.post('/register', (req, res) => {
  //create an instance of the Login model
  const signin = new Signin(req.body);
  //execute the validate method...
  signin.validate((error) => {
    if (error) {
      //we have validation errors...respond with details
      return res.status(422).send(error);
    }
    // get the email from the body of the request
    // query the db with User model to see if a document already exists
    // with the submitted email
    User.findOne({ email: req.body.email }, (err, users) => {
      //handle if err occurred
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred');
      }

      // if exist...respond with 400 and in the response send back message that
      // user already exists.
      if (users !== null) {
        return res.status(400).send('User already exists');
      }

      // replace the req,body.password value with the hashed equivalent
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        req.body.password = hash;
        // console.log(req.body);

        // Use the user model to insert a new record.
        // may have a validation error
        User.create(req.body, (err, savedUser) => {
          if (err) {
            return res.status(400).send(`Error: ${err.message}`);
          }
          console.log(savedUser);
          res.status(201).send();
        });

        // If the user was successfully created.
        // generate a json web token send a response back to the client

        const token = jwt.sign(
          {
            email: req.body.email,
            password: req.password,
          },
          process.env.SECRET
        );

        res.set('x-auth-token', token);

        res.send({
          email: req.body.email,
          password: req.body.password,
        });
      });
    });
  });
});

router.post('/login', (req, res) => {
  //create an instance of the Login model
  const login = new Login(req.body);
  //execute the validate method...
  login.validate((error) => {
    if (error) {
      //we have validation errors...respond with details
      return res.status(422).send(error);
    }

    // sample req.body could be { email: "joe@foo.com", password: "letmein" }
    // query the database using the User model to see
    User.findOne({ email: req.body.email }, (err, user) => {
      //handle if err occurred
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred');
      }

      // if there is a user with the provided email
      // if there is no returned user....respond with unauthorized response (401)
      if (user === null) {
        return res.status(401).send('No user exists');
      }
      console.log(user.password);

      // if there is a user....compare the submitted password with the user's password hash
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!result) {
          // if there is no match....respond with unauthorized response (401)
          // if there is a match....create a jwt send back in the response.
          return res.status(401).send('Unauthorized response');
        }
        const token = jwt.sign(
          {
            email: req.body.email,
            password: user.password,
          },
          process.env.SECRET
        );

        res.set('x-auth-token', token);
        res.send('Login success!!');
      });
      // res.send('login');
    });
  });
});

module.exports = router;
