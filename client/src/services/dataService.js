import axios from 'axios';
import authService from './authService';

class dataService {
  getClasses(callback) {
    //call your api data here...fetch or axios
    axios.get(`${process.env.REACT_APP_API_URL}/classes`).then((response) => {
      //console.log(response.data);
      callback(response.data);
    });
  }

  getOneClass(id, callback) {
    axios.get(`${process.env.REACT_APP_API_URL}/classes`).then((response) => {
      response.data.map((oneClass) => {
        if (oneClass._id === id) {
          //console.log(oneClass);
          callback(oneClass);
        }
      });
    });
  }

  createClass(newClass, callback) {
    axios
      .post(`${process.env.REACT_APP_API_URL}/classes`, newClass, {
        headers: { 'x-auth-token': authService.getToken() },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          callback(null);
        }
      })
      .catch((error) => {
        //console.log(error.response);
        callback(error.response);
      });
  }

  updateClass(id, editClass, callback) {
    axios
      .put(`${process.env.REACT_APP_API_URL}/classes/${id}`, editClass)
      .then((response) => {
        console.log(response);
        callback(null);
      })
      .catch((error) => {
        callback(error.response);
      });
  }

  deleteClass(id, callback) {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/classes/${id}`)
      .then((response) => {
        console.log(response);
        callback(null);
      })
      .catch((error) => {
        callback(error.response);
      });
  }
}

export default new dataService();
