import React, { Component } from 'react';
import API from '../utils/API';

class Profile extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileUploadHandler = () => {};

  render() {
    return (
      <div className="user-profile">
        <input type="file" onChange={this.fileSelectedHandler}></input>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default Profile;
