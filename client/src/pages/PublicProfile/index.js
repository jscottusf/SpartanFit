import React, { Component } from 'react';
import API from '../../utils/API';
import SaveBtn from '../../components/SaveBtn';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea, State } from '../../components/Form';
import './style.css';
import Alert from '../../components/Alert';

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
      editProfile: false,
      show: false,
      variant: undefined,
      message: '',
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
        username: res.data[0].username,
        firstName: res.data[0].firstName,
        lastName: res.data[0].lastName,
        email: res.data[0].email,
        city: res.data[0].city,
        state: res.data[0].state,
        joinDate: res.data[0].createdAt,
        bio: res.data[0].bio,
        interests: res.data[0].interests,
        currentWeight: res.data[0].currentWeight,
        goalWeight: res.data[0].goalWeight,
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

  render() {
    return (
      <Container>
        <Alert
          show={this.state.show}
          message={this.state.message}
          variant={this.state.variant}
        />
        <div className="profile">
          <Row>
            <Col size="md-10">
              <Row>
                <Col size="lg-12">
                  <div className="profile-head">
                    <h5>
                      {this.state.firstName} {this.state.lastName}
                    </h5>
                  </div>
                  <hr></hr>
                </Col>
              </Row>
              <Row>
                <Col size="lg-12">
                  <Row>
                    <Col size="md-6">
                      <label>Username</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <Input
                          value={this.state.username}
                          name="username"
                          onChange={this.handleInputChange}
                          type="text"
                        />
                      ) : (
                        <p>{this.state.username}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Name</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <div>
                          <Input
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                          />
                          <Input
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                          />
                        </div>
                      ) : (
                        <p>
                          {this.state.firstName} {this.state.lastName}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Email</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <Input
                          value={this.state.email}
                          name="email"
                          onChange={this.handleInputChange}
                          type="email"
                        />
                      ) : (
                        <p>{this.state.email}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Location</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <div>
                          <Input
                            value={this.state.city}
                            name="city"
                            onChange={this.handleInputChange}
                            type="text"
                          />
                          <State
                            value={this.state.state}
                            name="state"
                            onChange={this.handleInputChange}
                            required
                            class="form-control form-control"
                          />
                        </div>
                      ) : (
                        <p>
                          {this.state.city}, {this.state.state}
                        </p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Current Weight</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <Input
                          value={this.state.currentWeight}
                          name="currentWeight"
                          onChange={this.handleInputChange}
                          type="number"
                        />
                      ) : (
                        <p>{this.state.currentWeight}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Goal Weight</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <Input
                          value={this.state.goalWeight}
                          name="goalWeight"
                          onChange={this.handleInputChange}
                          type="text"
                        />
                      ) : (
                        <p>{this.state.goalWeight}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Interests</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <Input
                          value={this.state.interests}
                          name="interests"
                          onChange={this.handleInputChange}
                          type="text"
                        />
                      ) : (
                        <p>{this.state.interests}</p>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col size="md-6">
                      <label>Bio</label>
                    </Col>
                    <Col size="md-6">
                      {this.state.editProfile ? (
                        <TextArea
                          value={this.state.bio}
                          name="bio"
                          onChange={this.handleInputChange}
                          type="text"
                        />
                      ) : (
                        <p>{this.state.bio}</p>
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col size="lg-2">
              {this.state.editProfile ? (
                <SaveBtn
                  onClick={this.handleEditClick}
                  label="Submit Changes"
                />
              ) : (
                <SaveBtn onClick={this.handleEditClick} label="Edit Profile" />
              )}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default PublicProfile;
