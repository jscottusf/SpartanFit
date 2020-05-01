import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    //default message
    this.state = {
      message: 'loading...',
    };
  }

  componentDidMount() {
    //GET messages from server
    fetch('./api/home')
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Home;
