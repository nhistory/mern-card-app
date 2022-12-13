import React from 'react';
import '../css/navBar.css';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import jwt from 'jwt-decode';

const NavBar = () => {
  const auth = authService.getToken();
  const navigate = useNavigate();
  const logout = () => {
    authService.signout();
    navigate('/');
  };

  let decode;
  if (auth) {
    decode = jwt(auth);
    console.log(decode.email);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            aria-hidden="true"
            className="mr-2"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          <strong>My Fullstack App</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07">
          <div className="nav-item">
            <Link className="nav-link" to="/createForm">
              Enlist New Class
            </Link>
          </div>
          <ul className="navbar-nav">
            {auth ? (
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="dropdown07"
                  data-toggle="dropdown"
                >
                  Welcome {decode.email}!
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown07">
                  <Link className="dropdown-item" to="/" onClick={logout}>
                    Log out
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item text-end">
                  <Link className="nav-link" to="/signin">
                    Login
                  </Link>
                </li>
                <li className="nav-item text-end">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
