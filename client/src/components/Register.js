import React, { useState } from 'react';
import '../css/signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  //localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS!
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    //we will post the form data to the API authentication
    //fetch or axios
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          //there should be a token ... store it
          localStorage.setItem('token', response.headers['x-auth-token']);
          //now redirect to the main page with our data
          navigate('/');
        }
      });
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign up</h1>
      <label htmlFor="inputEmail" className="sr-only">
        First Name
      </label>
      <input
        type="text"
        id="inputFirstName"
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        className="form-control"
        placeholder="First Name"
        required
        autoFocus
      />
      <label htmlFor="inputEmail" className="sr-only">
        Last Name
      </label>
      <input
        type="text"
        id="inputLastName"
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
        className="form-control"
        placeholder="Last Name"
        required
      />
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="inputEmail"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email address"
        required
      />
      <label htmlFor="inputPassword" className="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Password"
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default Register;
