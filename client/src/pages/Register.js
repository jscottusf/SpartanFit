import React, { Component } from "react";
//import Jumbotron from '../components/Jumbotron';
import Wrapper from "../components/Wrapper";
import { Container } from "../components/Grid";
// import Grid from '../components/GridContainer';
import { Form, Input, SubmitBtn } from "../components/RegisterForm";
import Footer from "../components/Footer";
import GridContainer from "../components/GridContainer";

class Register extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="register">
        <div className="workouts">
          <Wrapper>
            <Container fluid>
              <div className="register-wrapper">
                <h1>
                  Spartan<span class="text-info">Fit</span>
                </h1>
                <div className="register-container">
                  <h1>Register</h1>
                  <Form>
                    <GridContainer
                      style={{ "grid-template-columns": "1fr 1fr" }}
                    >
                      <Input
                        for="firstName"
                        label="First Name: "
                        name="firstName"
                        id="firstName"
                        type="text"
                      />
                      <Input
                        for="lastName"
                        label="Last Name: "
                        name="lastName"
                        id="lastName"
                        type="text"
                      />
                      <Input
                        for="userName"
                        label="User Name: "
                        name="userName"
                        id="userName"
                        type="text"
                      />
                      <Input
                        for="Password"
                        label="Password: "
                        name="Password"
                        id="Password"
                        type="password"
                      />
                      <Input
                        for="Email"
                        label="Email: "
                        name="Email"
                        id="Email"
                        type="text"
                      />
                    </GridContainer>
                    <SubmitBtn />
                  </Form>
                  <p>
                    Already registered?{" "}
                    <a class="text-info" href="/login">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </Container>
          </Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Register;
