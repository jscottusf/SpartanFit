import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import GridContainer from '../components/GridContainer';
//import API from '../../utils/API';

class Login extends Component {
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
      <div className="login">
        <GridContainer
          style={{ 'grid-template-columns': '370px', 'padding-top': 50 }}
        >
          <h1>
            Spartan<span className="text-info">Fit</span>
          </h1>
          <LoginForm />
        </GridContainer>
      </div>
    );
  }
}

export default Login;
