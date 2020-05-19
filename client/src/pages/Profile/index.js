import React, { Component } from 'react';
import API from '../../utils/API';
import SaveBtn from '../../components/SaveBtn';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea, State } from '../../components/Form';
import './style.css';
import Alert from '../../components/Alert';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      user: null,
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
    this.props.getUser();
    this.setState({ id: this.props.id });
    this.loadUserData();
  };

  loadUserData = () => {
    API.getUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log(res.data);
      this.setState({
        user: res.data,
        id: res.data._id,
        username: res.data.username,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        email: res.data.email,
        city: res.data.city,
        state: res.data.state,
        joinDate: res.data.joinDate,
        bio: res.data.bio,
        interests: res.data.interests,
        currentWeight: res.data.currentWeight,
        goalWeight: res.data.goalWeight,
      });
    });
  };

  handleEditClick = event => {
    event.preventDefault();
    if (this.state.editProfile) {
      API.putUser(this.state.id, {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        city: this.state.city,
        state: this.state.state,
        bio: this.state.bio,
        interests: this.state.interests,
        currentWeight: this.state.currentWeight,
        goalWeight: this.state.goalWeight,
        slug: this.state.username.toLowerCase(),
      })
        .then(res => {
          if (res.status === 200) {
            const show = true;
            const message = 'Profile updated successfully';
            const variant = 'success';
            this.setState({
              show: show,
              message: message,
              variant: variant,
              editProfile: false,
            });
          }
        })
        .catch(err => {
          console.log(err);
          const show = true;
          const message = 'Username and/or email already taken';
          const variant = 'danger';
          this.setState({
            show: show,
            message: message,
            variant: variant,
            editProfile: false,
          });
          this.loadUserData();
        });
    } else {
      this.setState({ editProfile: true });
    }
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

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
                      <label>User Id</label>
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

export default Profile;
