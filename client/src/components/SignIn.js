import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const SignIn = (props) => {
  // localStorage.setItem('foo', 'bar');

  //define state in this component using HOOKS!
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    authService.signin(
      { email: email, password: password },
      (signinSuccess) => {
        if (signinSuccess) {
          navigate('/');
        } else {
          console.log('UNSUCCESSFUL LOGIN');
        }
      }
    );
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
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
        autoFocus
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
        Sign in
      </button>
    </form>
  );
};

export default SignIn;
