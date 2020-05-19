import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Alert from '../components/Alert';
import Wrapper from '../components/Wrapper';
import { Container } from '../components/Grid';
import { Form, Input } from '../components/RegisterForm';
import GridContainer from '../components/GridContainer';
import Menu from '../components/Menu';
import API from '../utils/API';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
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
    API.registerUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      slug: this.state.firstName.toLowerCase(),
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({
            redirectTo: '/login',
          });
        } else {
          console.log('username already taken');
        }
      })
      .catch(error => {
        console.log(error);
        const show = true;
        const message = 'Username or email already taken';
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
            <Container fluid>
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
                  <h4>Register</h4>
                  <Form>
                    <GridContainer
                      style={{ 'grid-template-columns': '1fr 1fr' }}
                    >
                      <Input
                        htmlFor="firstName"
                        label="First Name: "
                        name="firstName"
                        id="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                      <Input
                        htmlFor="lastName"
                        label="Last Name: "
                        name="lastName"
                        id="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                      <Input
                        htmlFor="username"
                        label="Username: "
                        name="username"
                        id="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      <Input
                        htmlFor="Password"
                        label="Password: "
                        name="password"
                        id="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <Input
                        htmlFor="Email"
                        label="Email: "
                        name="email"
                        id="Email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </GridContainer>
                    <button
                      type="submit"
                      onClick={this.handleSubmit}
                      className="btn btn-info"
                    >
                      Register
                    </button>
                  </Form>
                  <p>
                    Already registered?{' '}
                    <a className="text-info" href="/login">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </Container>
          </Wrapper>
        </div>
      );
    }
  }
}

export default Register;
