import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { Col, Row, Container } from '../components/Grid';
import Card from '../components/Card';
import Menu from '../components/Menu';
//import API from '../utils/API';

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
                <p>lorem...</p>
              </div>
            </div>
          </Wrapper>
        </div>
      );
    }
  }
}

export default Home;
