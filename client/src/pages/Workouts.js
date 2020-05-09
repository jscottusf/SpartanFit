import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Modal from "../components/Modal";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import WorkoutCard from "../components/WorkoutCard";
import "./workouts.css";

class Workouts extends Component {
  state = {
    data: [],
    title: "",
    description: "",
    show: false,
    modalForm: "",
  };

  addEntry = () => {
    this.setState({ modalForm: "add-entry" });
  };

  addWorkout = () => {
    this.setState({ modalForm: "add-workout" });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  viewEntries = () => {
    this.setState({ modalForm: "view-entries" });
  };

  render() {
    return (
      <div>
        <div className="workouts">
          <Nav />
          <Modal show={this.state.show} close={this.hideModal}>
            This is a test of the modal alert system, please remain calm and
            indoors while the modal response team is dispatched.
          </Modal>
          <Wrapper>
            <div className="main-container">
              <div className="row">
                <div className="col-md-6 mx-auto text-center add-btn-holder p-3">
                  <h2 className="mt-2 mb-3"> Your Workouts </h2>
                  <button
                    className="btn bg-dark text-light mb-2"
                    id="add-workout"
                    onClick={() => {
                      this.addWorkout();
                      this.showModal();
                    }}
                  >
                    Add something New
                  </button>
                  <hr className="w-100" />
                </div>
              </div>
              <div className="row mt-5" id="workouts-card-container">
                <div className="col-md-10 mx-auto text-center">
                  <WorkoutCard
                    name="Bicep Curls"
                    description="Lifting weights, alternating arms."
                    data={[
                      { type: "Frequency", date: "1", value: "20" },
                      { type: "Frequency", date: "2", value: "26" },
                      { type: "Frequency", date: "3", value: "37" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Workouts;
