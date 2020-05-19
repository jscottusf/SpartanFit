import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../components/Alert';
import LoginForm from '../components/LoginForm';
import API from '../utils/API';
import Menu from '../components/Menu';
import Wrapper from '../components/Wrapper';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      username: '',
      password: '',
      redirectTo: null,
      show: false,
      variant: undefined,
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.login({
      username: this.state.username,
      password: this.state.password,
    })
      .then(response => {
        if (response.status === 200) {
          //update App.js state
          //update the state to redirect to home
          this.setState({
            redirectTo: '/',
          });
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            id: response.data.id,
          });
        }
      })
      .catch(error => {
        console.log(error);
        const show = true;
        const message = 'Incorrect username or password';
        const variant = 'danger';
        this.setState({ show: show, message: message, variant: variant });
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="register-page">
          <Wrapper>
            <Menu />
            <div className="register-wrapper">
              <h1>
                Spartan<span className="text-info">Fit</span>
              </h1>
              <Alert
                show={this.state.show}
                message={this.state.message}
                variant={this.state.variant}
              />
              <div className="register-container">
                <h4>Login</h4>
                <LoginForm
                  username={this.state.username}
                  password={this.state.password}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </Wrapper>
        </div>
      );
    }
  }
}

export default Login;
