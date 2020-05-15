import React, { Component } from 'react';
import API from '../../utils/API';
import SaveBtn from '../../components/SaveBtn';
import { Col, Row, Container } from '../../components/Grid';
import { Input, TextArea } from '../../components/Form';
import './style.css';

class Profile extends Component {
  constructor() {
    super();
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
    };
  }

  componentDidMount = () => {
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
      });
      this.setState({ editProfile: false });
    } else {
      this.setState({ editProfile: true });
    }
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  // fileSelectedHandler = event => {
  //   this.setState({ selectedFile: event.target.files[0] });
  // };

  // fileUploadHandler = () => {};

  render() {
    return (
      <div className="profile">
        <div className="profile-wrapper">
          <Container fluid>
            <Row>
              <Col size="md-2">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div>
                </div>
              </Col>
              <Col size="md-8">
                <Row>
                  <Col size="md-10">
                    <div className="profile-head">
                      <h5>
                        {this.state.firstName} {this.state.lastName}
                      </h5>
                    </div>
                    <hr></hr>
                  </Col>
                </Row>
                <Row>
                  <Col size="md-8">
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
                            <div className="form-group">
                              <select
                                value={this.state.state}
                                name="state"
                                onChange={this.handleInputChange}
                                required
                                class="form-control form-control"
                              >
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                              </select>
                            </div>
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
              <Col size="md-2">
                {this.state.editProfile ? (
                  <SaveBtn
                    onClick={this.handleEditClick}
                    label="Submit Changes"
                  />
                ) : (
                  <SaveBtn
                    onClick={this.handleEditClick}
                    label="Edit Profile"
                  />
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
