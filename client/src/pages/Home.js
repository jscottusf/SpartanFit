import React, { Component } from 'react';
import { Container } from '../components/Grid';
import { Link } from 'react-router-dom';
import {
  CardDiv,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from '../components/BootstrapCard';
import Menu from '../components/Menu';
import GridContainer from '../components/GridContainer';
import workoutCard from '../images/workoutCard.jpg';
import foodCard from '../images/foodCard.jpg';
import profileCard from '../images/profileCard.jpg';
import socialCard from '../images/socialCard.jpg';
import spartan from '../images/spartan.jpg';
import Hero from '../components/Hero';

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
                    Build your own custom workout list. Keep track of your
                    activity to measure your progess over times
                  </CardText>
                  <Link to="/workouts" className="btn btn-dark">
                    Workouts
                  </Link>
                </CardBody>
              </CardDiv>
              <CardDiv>
                <CardImage image={foodCard} />
                <CardBody>
                  <CardTitle>Recipes</CardTitle>
                  <CardText>
                    Low Carb? Gluten Free? Vegan? Find the{' '}
                    <span className="text-info">perfect</span> meal for your
                    dietary needs
                  </CardText>
                  <Link to="/recipes" className="btn btn-dark">
                    Recipes
                  </Link>{' '}
                  <Link to="/savedrecipes" className="btn btn-secondary">
                    Saved Recipes
                  </Link>
                </CardBody>
              </CardDiv>
              <CardDiv>
                <CardImage image={socialCard} />
                <CardBody>
                  <CardTitle>SpartanFit Social</CardTitle>
                  <CardText>
                    You're not alone. Find people to follow. Share your
                    progress. The SpartanFit community is a here to support you.
                  </CardText>
                  <Link to="/social" className="btn btn-dark">
                    SpartanFit Social
                  </Link>{' '}
                </CardBody>
              </CardDiv>
              <CardDiv>
                <CardImage image={profileCard} />
                <CardBody>
                  <CardTitle>SpartanFit Profile</CardTitle>
                  <CardText>
                    View and Edit your Public Profile. Share your interests,
                    create a bio, edit your username. What are your fitness
                    goals?
                  </CardText>
                  <Link to="/profile" className="btn btn-dark">
                    SpartanFit Profile
                  </Link>
                </CardBody>
              </CardDiv>
            </GridContainer>
          </div>
        </Container>
      );
    } else {
      return (
        <div>
          <Hero backgroundImage={spartan}>
            <Menu />
            <h3>
              Spartan<span class="text-info">Fit</span>
            </h3>
            <h1>
              This is Spartan<span className="text-info">Fit</span>
            </h1>
            <h2>A fitness community</h2>
            <p>
              SpartanFit is a fitness application which uses data-based progress
              monitoring to help you reach your fitness goals.
            </p>
            <p>
              With our easy-to-use interface, set up and track your progress on
              your workouts and set up the perfect diet plan.
            </p>
            <p>
              Ready to give it a try?{' '}
              <Link className="text-info" to="/register">
                Register
              </Link>{' '}
              or{' '}
              <Link className="text-info" to="/login">
                login
              </Link>{' '}
              now.
            </p>
          </Hero>
        </div>
      );
    }
  }
}

export default Home;
