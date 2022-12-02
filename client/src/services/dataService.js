import axios from 'axios';

class dataService {
  getClasses(callback) {
    //call your api data here...fetch or axios
    axios.get(`${process.env.REACT_APP_API_URL}/classes`).then((response) => {
      console.log(response.data);
      callback(response.data);
    });
  }

  getOneClass(id) {}

  createClass() {}

  updateClass() {}

  deleteClass() {}
}

export default new dataService();
