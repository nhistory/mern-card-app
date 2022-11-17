import React from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import SignIn from './components/SignIn';
import Footer from './components/Footer';
import axios from 'axios';

import './css/app.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      classes: []
    }
  }

  componentDidMount(){
    //call your api data here...fetch or axios
    axios.get('http://localhost:5000/api/classes')
        .then(response=>{
          console.log(response.data)
          this.setState({ classes: response.data })
        })
  }

  render(){
    return (
      <React.Fragment>
        <NavBar />
        <div id="main-content">
          {/* <SignIn /> */}
          <Main classes={this.state.classes} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
