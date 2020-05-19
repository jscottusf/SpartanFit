import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { Col, Row, Container } from '../components/Grid';
import Card from '../components/Card';
import API from '../utils/API';
import Menu from '../components/Menu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }

  componentDidMount = () => {
    this.setState({ id: this.props.id });
  };

  render() {
    const loggedIn = this.props.loggedIn;
    if (loggedIn) {
      return (
        <Container>
          <div className="home">
            <Wrapper>
              <Container fluid>
                <Row>
                  <Col size="md-8">
                    <div className="newsfeed-card">
                      <h1>Activity</h1>
                      <hr></hr>
                    </div>
                  </Col>
                  <Col size="md-4">
                    <div className="snapshot-card">
                      <Card
                        title="Title goes here"
                        stuff="stuff goes here"
                        link="https://www.google.com"
                      />
                    </div>
                    <div className="workouts-card">
                      <Card
                        title="Title goes here"
                        stuff="stuff goes here"
                        link="https://www.google.com"
                      />
                    </div>
                    <div className="food-card">
                      <Card
                        title="Title goes here"
                        stuff="stuff goes here"
                        link="https://www.google.com"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </Wrapper>
          </div>
        </Container>
      );
    } else {
      return (
        <div className="register-page">
          <Wrapper>
            <Menu />
            <div className="register-wrapper">
              <h1>
                Spartan<span class="text-info">Fit</span>
              </h1>
              <div className="register-container">
                <h1>This is SpartanFit</h1>
                <p>
                  SpartanFit is a fitness application which uses data-based
                  progress monitoring to help you reach your fitness goals.
                </p>
                <p>
                  With our easy-to-use interface, set up and track your progress
                  on your workouts and set up the perfect diet plan.
                </p>
                <p>
                  Ready to give it a try? <a href="/register">Register</a> or
                  <a href="/login">login</a> now!
                </p>
              </div>
            </div>
          </Wrapper>
        </div>
      );
    }
  }
}

export default Home;
