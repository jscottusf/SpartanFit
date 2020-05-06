import React, { Component } from 'react';
//import Jumbotron from '../components/Jumbotron';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
//import API from '../../utils/API';

class Home extends Component {
  state = {
    search: '',
    books: [],
    error: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="home">
        <Nav />
        <h1>hello</h1>
        <Footer />
      </div>
    );
  }
}

export default Home;
