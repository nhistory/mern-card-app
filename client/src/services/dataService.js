import axios from 'axios';
import authService from './authService';

class dataService {
  getClasses(callback) {
    //call your api data here...fetch or axios
    axios.get(`${process.env.REACT_APP_API_URL}/classes`).then((response) => {
      console.log(response.data);
      callback(response.data);
    });
  }

  getOneClass(id) {}

  createClass(newClass, callback) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/classes`, newClass, {
        headers: { 'x-auth-token': authService.getToken() },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          callback(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
        callback(false);
      });
  }

  updateClass() {}

  deleteClass() {}
}

export default new dataService();
