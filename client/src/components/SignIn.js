import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const SignIn = (props) => {
  // localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS!
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [authErr, setAuthErr] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    setErrors('');
    setAuthErr('');
    authService.signin({ email: email, password: password }, (error) => {
      if (!error) {
        navigate('/');
      } else if (error.status === 422) {
        const errors = error.data.errors;
        setErrors(errors);
        console.log(error);
      } else if (error.status === 401) {
        console.log(error);
        setAuthErr(error.data);
      }
    });
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
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
        autoFocus
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
        Sign in
      </button>
      {authErr && <div className="alert alert-danger">{authErr}</div>}
    </form>
  );
};

export default SignIn;
