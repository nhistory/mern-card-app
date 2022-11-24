import React from 'react';
import Card from './Card';
import '../css/main.css';
import axios from 'axios';

import 'font-awesome/css/font-awesome.min.css';

class Main extends React.Component {
  //define our state
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
    };
  }

  componentDidMount() {
    //call your api data here...fetch or axios
    axios.get('http://localhost:5000/api/classes').then((response) => {
      console.log(response.data);
      this.setState({ classes: response.data });
    });
  }

  render() {
    //console.log(localStorage.getItem('foo'));

    return (
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search this site"
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
              {this.state.classes.map((item) => {
                return <Card oneClass={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
