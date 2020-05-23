import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'world',
    };
  }

  render() {
    return <h1>hello, {this.state.test}</h1>;
  }
}

export default Post;
