import React, { Component } from 'react';
//import Jumbotron from '../components/Jumbotron';
import Wrapper from '../components/Wrapper';
import { Col, Row, Container } from '../components/Grid';
import Card from '../components/Card';
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
        <Wrapper>
          <Container fluid>
            <Row>
              <Col size="md-8">
                <div className="newsfeed">
                  <h1>Activity</h1>
                  <hr></hr>
                </div>
              </Col>
              <Col size="md-4">
                <div className="snapshot">
                  <Card
                    title="Title goes here"
                    stuff="stuff goes here"
                    link="https://www.google.com"
                  />
                </div>
                <div className="workouts">
                  <Card
                    title="Title goes here"
                    stuff="stuff goes here"
                    link="https://www.google.com"
                  />
                </div>
                <div className="food">
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
        <Footer />
      </div>
    );
  }
}

export default Home;
