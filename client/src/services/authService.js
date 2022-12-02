import axios from 'axios';

class authService {
  signin(credentials, callback) {
    //we will post the form data to the API authentication
    //fetch or axios
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, credentials)
      .then((response) => {
        if (response.status === 200) {
          //there should be a token ... store it
          localStorage.setItem('token', response.headers['x-auth-token']);
          callback(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
        callback(false);
      });
  }

  register(information, callback) {
    //we will post the form data to the API authentication
    //fetch or axios
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, information)
      .then((response) => {
        if (response.status === 200) {
          //there should be a token ... store it
          localStorage.setItem('token', response.headers['x-auth-token']);
          //now redirect to the main page with our data
          callback(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
        callback(false);
      });
  }

  isAuthenticate() {
    return localStorage.getItem('token') !== null;
  }

  signout() {
    localStorage.removeItem('token');
  }
}

export default new authService();
