import React, { Component } from "react";
import API from "../utils/API";
import Modal from "../components/Modal";
import AddEntry from "../components/WorkoutModalBodies/AddEntry";
import AddWorkout from "../components/WorkoutModalBodies/AddWorkout";
import ViewEntries from "../components/WorkoutModalBodies/ViewEntries";
import ViewChart from "../components/WorkoutModalBodies/ViewChart";
import WorkoutCard from "../components/WorkoutCard";
import { format } from "date-fns";
import { Line } from "react-chartjs-2";
import "./workouts.css";
import { Col, Row, Container } from "../components/Grid";
import {
  CardDiv,
  CardBody,
  CardTitle,
  CardText,
} from "../components/BootstrapCard";
import GridContainer from "../components/GridContainer";

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

  //Used for finding Stepsize for Chart.js from passed data.
  cleanStepsize = (arr) => {
    if (arr.length > 2) {
      return Math.floor(
        (Math.max(arr[0].value, arr[1].value, arr[2].value) -
          Math.min(arr[0].value, arr[1].value, arr[2].value)) /
          3
      );
    } else if (arr.length > 1) {
      return Math.floor(
        (Math.max(arr[0].value, arr[1].value) -
          Math.min(arr[0].value, arr[1].value)) /
          3
      );
    } else {
      return null;
    }
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

  //Deletes workout and associated data when button is clicked.
  handleDeleteWorkout = (id) => {
    API.deleteWorkout(id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.loadWorkouts();
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
        date: this.state.dataDate.split("-").join("/"),
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

  //Look at one workout's data in-depth as either 'entries' in a table or a 'chart'
  viewInfo = (id, format) => {
    this.setState({ modalForm: `view-${format}`, entryID: id });
    this.loadOneWorkout(id);
  };

  render() {
    return (
      <div className="workouts">
        <GridContainer style={{ gridTemplateColumns: "1fr 300px" }}>
          <h4>Your Workouts</h4>
          <button
            type="submit"
            className="btn btn-dark"
            id="addWorkout"
            data-toggle="modal"
            data-target="#form-modal"
            onClick={() => {
              this.addWorkout();
            }}
          >
            + Add Workout
          </button>
        </GridContainer>
        <hr></hr>
        <GridContainer style={{ gridTemplateColumns: "1fr 1fr" }}>
          {this.state.workouts.map((data) => (
            <CardDiv>
              <CardBody id={"workoutCard"}>
                <CardTitle>{data.name}</CardTitle>
                <GridContainer style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <Line
                      className="chart"
                      data={{
                        //Dates of data on the X-axis of the chart.
                        //Only 3 data points shown for chart clarity.
                        //Data points are reversed to flow in the proper direction
                        labels: data.data
                          .slice(0, 3)
                          .reverse()
                          .map((entry) =>
                            format(new Date(entry.date), "MM-dd")
                          ),
                        datasets: [
                          {
                            label: "Workout Progress",
                            scaleStepWidth: 2,
                            backgroundColor: "rgb(255, 99, 132)",
                            borderColor: "rgb(255, 99, 132)",
                            //Values of data on the Y-axis of the chart.
                            data: data.data
                              .slice(0, 3)
                              .reverse()
                              .map((entry) => entry.value),
                          },
                        ],
                      }}
                      options={{
                        legend: {
                          labels: {
                            fontColor: "rgba (0, 0, 0, 0.9)",
                            fontSize: 16,
                            fontStyle: "bold",
                          },
                        },
                        scales: {
                          xAxes: [
                            {
                              ticks: {
                                fontColor: "rgba(0, 0, 0, 0.8)",
                                fontStyle: "bold",
                              },
                            },
                          ],
                          yAxes: [
                            {
                              ticks: {
                                fontColor: "rgba(0, 0, 0, 0.8)",
                                precision: 0,
                                //Sends the data to cleanStepsize function to dynamically
                                //create an appropriate amount of y-ticks based on range of data.
                                //Keeps y-ticks from being clustered together too closely.
                                stepSize: this.cleanStepsize(data.data),
                              },
                            },
                          ],
                        },
                      }}
                    />
                  </div>
                  <div>
                    <CardText>
                      {data.data ? (
                        <div>
                          <h5>Your last 3 entries</h5>
                          <table className="mx-auto text-center table data-table">
                            <tbody>
                              <tr>
                                <th>Day</th>
                                <th>{data.type || "Frequency"}</th>
                              </tr>
                              {data.data.slice(0, 3).map((data) => {
                                return (
                                  <tr>
                                    <td>
                                      {format(new Date(data.date), "MM-dd-yy")}
                                    </td>{" "}
                                    <td>{data.value}</td>{" "}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                          <hr className="w-100" />
                        </div>
                      ) : (
                        //   If no data passed, tell user.
                        <h3>No data yet!</h3>
                      )}
                    </CardText>
                  </div>
                </GridContainer>
              </CardBody>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-5">
                    <i
                      class="fas fa-trash-alt"
                      id="workout-icon"
                      onClick={() => this.handleDeleteWorkout(data._id)}
                    ></i>
                  </div>
                  <div className="col-md-7 d-flex flex-column">
                    <div className="card-btn-holder d-flex align-self-end">
                      <i
                        class="fas fa-chart-area"
                        onClick={() => this.viewInfo(data._id, "chart")}
                        data-toggle="modal"
                        data-target="#form-modal"
                        id="workout-icon"
                      ></i>
                      <i
                        class="fas fa-list"
                        onClick={() => this.viewInfo(data._id, "entries")}
                        data-toggle="modal"
                        data-target="#form-modal"
                        id="workout-icon"
                      ></i>
                      <i
                        class="fas fa-plus"
                        onClick={() => this.addEntry(data._id)}
                        data-toggle="modal"
                        data-target="#form-modal"
                        id="workout-icon"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </CardDiv>
          ))}
        </GridContainer>
        <Modal
          show={this.state.show}
          close={this.hideModal}
          submit={this.handleFormSubmit}
          //Changes body of modal based on state. Allows for modal reuse.
          status={this.state.modalForm}
        >
          {this.selectForm(this.state.modalForm, this.state.entryID)}
        </Modal>
      </div>
    );
  }
}

export default Workouts;
