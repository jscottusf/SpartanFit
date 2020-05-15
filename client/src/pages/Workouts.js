import React, { Component } from "react";
import API from "../utils/API";
import Modal from "../components/Modal";
import AddEntry from "../components/WorkoutForms/AddEntry";
import AddWorkout from "../components/WorkoutForms/AddWorkout";
import ViewEntries from "../components/WorkoutForms/ViewEntries";
import Wrapper from "../components/Wrapper";
import WorkoutCard from "../components/WorkoutCard";
import { Line } from "react-chartjs-2";
import "./workouts.css";

class Workouts extends Component {
  state = {
    id: null,
    workouts: [],
    dataDate: "",
    dataValue: "",
    workoutName: "",
    workoutDescription: "",
    workoutType: "",
    modalForm: "",
    entryID: "",
    retrievedEntries: [],
  };

  componentDidMount = () => {
    this.loadWorkouts();
  };

  addEntry = (id) => {
    this.setState({ modalForm: "add-entry", entryID: id });
  };

  addWorkout = () => {
    this.setState({ modalForm: "add-workout" });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  //Submits form for both workouts and data entry
  handleFormSubmit = () => {
    switch (this.state.modalForm) {
      case "add-workout":
        return this.submitWorkouts();
      case "add-entry":
        return this.submitData(this.state.entryID);
      default:
        return null;
    }
  };

  loadOneWorkout = (id) => {
    API.getWorkoutByID(id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
      this.setState({ retrievedEntries: res.data.data });
    });
  };

  loadWorkouts = () => {
    API.getWorkoutsByUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log(res.data);
      this.setState({ workouts: res.data.workout });
    });
  };

  //Chooses contents of modal based on state

  selectForm = (form) => {
    switch (form) {
      case "add-workout":
        return <AddWorkout handleInputChange={this.handleInputChange} />;
      case "add-entry":
        return <AddEntry handleInputChange={this.handleInputChange} />;
      case "view-entries":
        return <ViewEntries data={this.state.retrievedEntries} />;
      default:
        return null;
    }
  };

  //Submits data entries to API
  submitData = () => {
    if (this.state.dataValue && this.state.dataDate) {
      let newData = {
        value: this.state.dataValue,
        date: this.state.dataDate,
      };
      // Modify to put params
      //Grab id from state to put in params
      API.postData(this.state.entryID, newData).then((err, res) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      return false;
    }
  };

  //Submits workouts to API
  submitWorkouts = () => {
    if (this.state.workoutName && this.state.workoutType) {
      let newWorkout = {
        name: this.state.workoutName,
        type: this.state.workoutType,
        description: this.state.workoutDescription,
      };
      console.log(newWorkout);
      API.postWorkout(this.props.id, newWorkout).then((err, res) => {
        if (err) {
          console.log(err);
        }
      });
    } else {
      return false;
    }
  };

  viewEntries = (id) => {
    this.setState({ modalForm: "view-entries", entryID: id });
    this.loadOneWorkout(id);
  };

  render() {
    return (
      <div>
        <div className="workouts">
          <Modal
            show={this.state.show}
            close={this.hideModal}
            submit={this.handleFormSubmit}
            status={this.state.modalForm}
          >
            {this.selectForm(this.state.modalForm, this.state.entryID)}
          </Modal>
          <Wrapper>
            <div className="main-container">
              <div className="row">
                <div className="col-md-6 mx-auto text-center add-btn-holder p-3">
                  <h2 className="mt-2 mb-3"> Your Workouts </h2>
                  <button
                    className="btn bg-dark text-light mb-2"
                    id="add-workout"
                    data-toggle="modal"
                    data-target="#form-modal"
                    onClick={() => {
                      this.addWorkout();
                    }}
                  >
                    Add something New
                  </button>
                  <hr className="w-100" />
                </div>
              </div>
              <div className="row mt-5" id="workouts-card-container">
                <div className="col-md-10 mx-auto text-center">
                  {/* 
                  Example card - not generated from MongoDB 
                    <WorkoutCard
                    name="Bicep Curls"
                    description="Lifting weights, alternating arms."
                    data={[
                      { type: "Frequency", date: "1", value: "20" },
                      { type: "Frequency", date: "2", value: "26" },
                      { type: "Frequency", date: "3", value: "37" },
                    ]}
                    // Add entry by ID of card
                    addEntry={() => this.addEntry("test")}
                    viewEntries={this.viewEntries}
                  /> */}
                  {/* Generate cards based on Workout data in state */}
                  {this.state.workouts.map((data) => (
                    <WorkoutCard
                      name={data.name}
                      type={data.type}
                      description={data.description}
                      data={data.data}
                      key={data._id}
                      id={data._id}
                      // Saves id to state to prepare for post
                      addEntry={() => this.addEntry(data._id)}
                      viewEntries={() => this.viewEntries(data._id)}
                      chart={
                        <Line
                          data={{
                            labels: data.data.map((entry) => entry.date),
                            datasets: [
                              {
                                label: "Workout Progress",
                                backgroundColor: "rgb(255, 99, 132)",
                                borderColor: "rgb(255, 99, 132)",
                                data: data.data.map((entry) => entry.value),
                              },
                            ],
                          }}
                        />
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Workouts;
