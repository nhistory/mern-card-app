import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Register = (props) => {
  //localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS!
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    authService.register(
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
      (error) => {
        if (!error) {
          navigate('/');
        } else {
          const errors = error.data.errors;
          setErrors(errors);
          console.log(errors);
        }
      }
    );
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
        autoFocus
      />
      {errors.firstName && (
        <div className="alert alert-danger">{errors.firstName.message}</div>
      )}
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
      />
      {errors.lastName && (
        <div className="alert alert-danger">{errors.lastName.message}</div>
      )}
      <label htmlFor="inputEmail" className="sr-only">
        Email address
      </label>
      <input
        type="text"
        id="inputEmail"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email address"
      />
      {errors.email && (
        <div className="alert alert-danger">{errors.email.message}</div>
      )}
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
      />
      {errors.password && (
        <div className="alert alert-danger">{errors.password.message}</div>
      )}
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default Register;
