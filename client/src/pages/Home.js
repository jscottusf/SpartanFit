import React, { Component } from 'react';
import Wrapper from '../components/Wrapper';
import { Col, Row, Container } from '../components/Grid';
import { Link } from 'react-router-dom';
import {
  CardDiv,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from '../components/BootstrapCard';
import API from '../utils/API';
import Menu from '../components/Menu';
import GridContainer from '../components/GridContainer';
import workoutCard from '../images/workoutCard.jpg';
import foodCard from '../images/foodCard.jpg';

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
            <GridContainer style={{ 'grid-template-columns': '1fr 1fr' }}>
              <CardDiv>
                <CardImage image={workoutCard} />
                <CardBody>
                  <CardTitle>Workouts</CardTitle>
                  <CardText>
                    Build your own custome workout list. Keep track of your
                    activity to measure your progess over times
                  </CardText>
                  <Link to="/workouts" className="btn btn-primary">
                    Workouts
                  </Link>
                </CardBody>
              </CardDiv>
              <CardDiv>
                <CardImage image={foodCard} />
                <CardBody>
                  <CardTitle>Recipes</CardTitle>
                  <CardText>
                    Low Card? Gluten Free? Vegan? Find the{' '}
                    <span className="text-info">perfect</span> meal for your
                    dietary needs
                  </CardText>
                  <Link to="/recipes" className="btn btn-primary">
                    Recipes
                  </Link>
                </CardBody>
              </CardDiv>
            </GridContainer>
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
