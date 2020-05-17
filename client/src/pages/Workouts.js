import React, { Component } from "react";
import API from "../utils/API";
import Modal from "../components/Modal";
import AddEntry from "../components/WorkoutModalBodies/AddEntry";
import AddWorkout from "../components/WorkoutModalBodies/AddWorkout";
import ViewEntries from "../components/WorkoutModalBodies/ViewEntries";
import ViewChart from "../components/WorkoutModalBodies/ViewChart";
import Wrapper from "../components/Wrapper";
import WorkoutCard from "../components/WorkoutCard";
import { format } from "date-fns";
import { Line } from "react-chartjs-2";
import "./workouts.css";

class Workouts extends Component {
  state = {
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

  //Changes modal body to be the add-entry form for inputting data.
  addEntry = (id) => {
    this.setState({ modalForm: "add-entry", entryID: id });
  };

  addWorkout = () => {
    this.setState({ modalForm: "add-workout" });
  };

  //Deletes data when button is clicked.
  handleDeleteEntry = (id) => {
    console.log(`Deleting entry with ID: ${id}`);
    API.deleteData(id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.loadWorkouts();
      this.loadOneWorkout(this.state.entryID);
    });
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

  //Grabs just one workout's information, used for grabbing more data to put in modals
  loadOneWorkout = (id) => {
    API.getWorkoutByID(id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
      this.setState({ retrievedEntries: res.data.data });
    });
  };

  //Gets all workotus for the user
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
        return (
          <ViewEntries
            delete={this.handleDeleteEntry}
            data={this.state.retrievedEntries}
          />
        );
      case "view-chart":
        return <ViewChart data={this.state.retrievedEntries} />;
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
        this.loadWorkouts();
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
        this.loadWorkouts();
      });
    } else {
      return false;
    }
  };

  trimData = (data, property) => {
    console.log(data);
    let trimmed = data.slice(0, 3);
    console.log(trimmed);
    return trimmed.map((entry) => entry[property]);
  };

  //Look at one workout's data in-depth as either 'entries' in a table or a 'chart'
  viewInfo = (id, format) => {
    this.setState({ modalForm: `view-${format}`, entryID: id });
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
            //Changes body of modal based on state. Allows for modal reuse.
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
                  {/* Generate cards based on Workout data in state */}
                  {this.state.workouts.map((data) => (
                    <WorkoutCard
                      name={data.name}
                      type={data.type}
                      description={data.description}
                      //Only display up to 3 data points on the card itself.
                      data={data.data.slice(0, 3)}
                      key={data._id}
                      id={data._id}
                      // Saves id to state to prepare for post
                      addEntry={() => this.addEntry(data._id)}
                      viewEntries={() => this.viewInfo(data._id, "entries")}
                      viewChart={() => this.viewInfo(data._id, "chart")}
                      //Creates Line graph using Chart.js
                      chart={
                        <Line
                          data={{
                            //Dates of data on the X-axis of the chart.
                            labels: data.data
                              .slice(0, 3)
                              .map((entry) =>
                                format(new Date(entry.date), "MM-dd")
                              ),
                            //format(date, "MM-dd-yy")
                            datasets: [
                              {
                                label: "Workout Progress",
                                backgroundColor: "rgb(255, 99, 132)",
                                borderColor: "rgb(255, 99, 132)",
                                //Values of data on the Y-axis of the chart.
                                data: data.data
                                  .slice(0, 3)
                                  .map((entry) => entry.value),
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
