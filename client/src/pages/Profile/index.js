import React, { Component } from 'react';
import API from '../../utils/API';
import Wrapper from '../../components/Wrapper';
import { Col, Row, Container } from '../../components/Grid';
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

  // fileSelectedHandler = event => {
  //   this.setState({ selectedFile: event.target.files[0] });
  // };

  // fileUploadHandler = () => {};

  render() {
    return (
      <div className="profile">
        <div className="profile-wrapper">
          <Container>
            <form method="post">
              <Row>
                <Col size="md-4">
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
                <Col size="md-6">
                  <div className="profile-head">
                    <h5>
                      {this.state.firstName} {this.state.lastName}
                    </h5>
                  </div>
                  <hr></hr>
                  <Row>
                    <div className="col-md-8">
                      <div
                        className="tab-content profile-tab"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <Row>
                            <div className="col-md-6">
                              <label>User Id</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.username}</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Name</label>
                            </div>
                            <div className="col-md-6">
                              <p>
                                {this.state.firstName} {this.state.lastName}
                              </p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Email</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.email}</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Location</label>
                            </div>
                            <div className="col-md-6">
                              <p>
                                {this.state.city}, {this.state.state}
                              </p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Current Weight</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.currentWeight}</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Goal Weight</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.goalWeight}</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Interests</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.interests}</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Bio</label>
                            </div>
                            <div className="col-md-6">
                              <p>{this.state.bio}</p>
                            </div>
                          </Row>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <Row>
                            <div className="col-md-6">
                              <label>Experience</label>
                            </div>
                            <div className="col-md-6">
                              <p>Expert</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Hourly Rate</label>
                            </div>
                            <div className="col-md-6">
                              <p>10$/hr</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Total Projects</label>
                            </div>
                            <div className="col-md-6">
                              <p>230</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>English Level</label>
                            </div>
                            <div className="col-md-6">
                              <p>Expert</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-6">
                              <label>Availability</label>
                            </div>
                            <div className="col-md-6">
                              <p>6 months</p>
                            </div>
                          </Row>
                          <Row>
                            <div className="col-md-12">
                              <label>Your Bio</label>
                              <br />
                              <p>Your detail description</p>
                            </div>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </Row>
                </Col>
                <Col size="md-2">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                  />
                </Col>
              </Row>
            </form>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
