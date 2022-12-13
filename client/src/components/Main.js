import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../css/main.css';
import 'font-awesome/css/font-awesome.min.css';
import dataService from '../services/dataService';

const Main = (props) => {
  //define our state
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     classes: [],
  //   };
  // }
  const [classes, setClasses] = useState([]);
  const [userInput, setUserInput] = useState('');

  // componentDidMount() {
  //   dataService.getClasses((classes) => {
  //     this.setState({ classes: classes });
  //   });
  // }
  useEffect(() => {
    //get our data
    dataService.getClasses((classes) => {
      setClasses(classes);
    });
  }, [classes]);

  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  // useEffect(() => {
  //   console.log(userInput);
  //   //console.log(classes);
  // }, [userInput]);

  const searchedList = classes.filter((item) => {
    return item.teacher.name.toLowerCase().includes(userInput);
  });
  //console.log(searchedList);

  const onDelete = (classId) => {
    console.log(classId);
    dataService.deleteClass(classId, (err) => {
      if (err) {
        console.log(err);
        if (err.status === 401) {
          console.log('UNAUTHORIZED');
        }
        return;
      }
    });
  };

  return (
    <div>
      <section className="jumbotron text-center">
        <div className="container">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search teacher name"
              onChange={getValue}
            />
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {searchedList.map((item) => {
              return (
                <Card key={item._id} oneClass={item} onDelete={onDelete} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
