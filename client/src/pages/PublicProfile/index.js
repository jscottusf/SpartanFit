import React, { Component } from 'react';
import API from '../../utils/API';
import SaveBtn from '../../components/SaveBtn';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea, State } from '../../components/Form';
import './style.css';
import Alert from '../../components/Alert';
import {
  CardDiv,
  CardBody,
  CardTitle,
  CardText,
} from '../../components/BootstrapCard';
import thumb from '../../images/thumb.png';
import Btn from '../../components/Btn';
import PostCard from '../../components/PostCard';

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.route = window.location.pathname;
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      city: '',
      state: '',
      joinDate: '',
      bio: '',
      interests: '',
      currentWeight: null,
      goalWeight: null,
      show: false,
      variant: undefined,
      message: '',
      hover: false,
      following: false,
      imageUrl: '',
      posts: [],
    };
  }

  componentDidMount = () => {
    this.loadUserdata();
  };

  loadUserdata = () => {
    API.getPublicProfile(this.route).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.setState({
        user: res.data[0],
        id: res.data[0]._id,
        username: res.data[0].username,
        firstName: res.data[0].firstName,
        lastName: res.data[0].lastName,
        email: res.data[0].email,
        city: res.data[0].city,
        state: res.data[0].state,
        joinDate: res.data[0].joinDate,
        bio: res.data[0].bio,
        interests: res.data[0].interests,
        currentWeight: res.data[0].currentWeight,
        goalWeight: res.data[0].goalWeight,
        imageUrl: res.data[0].image[0]
          ? res.data[0].image[0].profileImg
          : thumb,
        posts: res.data[0].posts,
      });
    });
  };

  // handleInputChange = event => {
  //   let value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <div className="profile-page">
        <Alert
          show={this.state.show}
          message={this.state.message}
          variant={this.state.variant}
        />
        <CardDiv>
          <CardBody>
            <CardTitle>
              {this.state.firstName} {this.state.lastName}
            </CardTitle>
            <Row style={{ padding: 0, margin: 0 }}>
              <Col size="lg-3">
                <div className="profile-img">
                  <img
                    src={process.env.PUBLIC_URL + this.state.imageUrl}
                    alt=""
                  />
                </div>
              </Col>
              <Col size="lg-6">
                <CardText>
                  <Row>
                    <Col size="lg-5">
                      <Row>
                        <Col size="md-3">
                          <label>ID</label>
                        </Col>
                        <Col size="md-7">
                          <p>{this.state.username}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-3">
                          <label>Name</label>
                        </Col>
                        <Col size="md-7">
                          <p>
                            {this.state.firstName} {this.state.lastName}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-3">
                          <label>Email</label>
                        </Col>
                        <Col size="md-7">
                          <p>{this.state.email}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-3">
                          <label>Location</label>
                        </Col>
                        <Col size="md-7">
                          <p>
                            {this.state.city}, {this.state.state}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-3">
                          <label>Weight</label>
                        </Col>
                        <Col size="md-7">
                          <p>{this.state.currentWeight}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-3">
                          <label>Goal</label>
                        </Col>
                        <Col size="md-7">
                          <p>{this.state.goalWeight}</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col size="lg-7">
                      <Row>
                        <Col size="md-4">
                          <label>Interests</label>
                        </Col>
                        <Col size="md-8">
                          <p>{this.state.interests}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col size="md-4">
                          <label>Bio</label>
                        </Col>
                        <Col size="md-8">
                          <p>{this.state.bio}</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardText>
              </Col>
              <Col size="lg-3">
                <div className="edit-btn">
                  {this.state.following ? (
                    <Btn
                      className={
                        this.state.hover
                          ? 'btn btn-danger btn-sm'
                          : 'btn btn-primary btn-sm'
                      }
                      id="following"
                      label={this.state.hover ? 'unfollow' : 'following'}
                      style={{ borderRadius: '1.5rem' }}
                      onMouseEnter={this.toggleHover}
                      onMouseLeave={this.toggleHover}
                    />
                  ) : (
                    <Btn
                      className="btn btn-outline-primary btn-sm"
                      label="follow"
                      id="following"
                      style={{ borderRadius: '1.5rem' }}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <hr></hr>
            <h4>Posts</h4>
            <hr></hr>
            {this.state.posts.length ? (
              <div>
                {this.state.posts.map(post => (
                  <CardDiv>
                    <PostCard
                      key={post._id}
                      id={post._id}
                      firstName={post.firstName}
                      lastName={post.lastName}
                      image={post.userpic}
                      username={post.username}
                      postBody={post.postBody}
                    >
                      <i class="far fa-heart"></i>
                      <Link
                        to={'/posts/' + post._id}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <i class="far fa-comments"></i> ({post.comments.length})
                      </Link>
                    </PostCard>
                  </CardDiv>
                ))}
              </div>
            ) : (
              <h3>No Posts to Display</h3>
            )}
          </CardBody>
        </CardDiv>
      </div>
    );
  }
}

export default PublicProfile;
