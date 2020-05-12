import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";

// Card will house information about individual exercises.
function WorkoutCard(props) {
  return (
    <div className="workout-well card my-5 w-100">
      {/* Card header */}
      <div className="card-header">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            {/* Name of workout is displayed here. */}
            <h2 className="workout-name">{props.name}</h2>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9"></div>
        </div>
      </div>
      {/* Card body */}
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            {/* Houses chart for behavior. */}
            {/* TODO: Use Chart.js to generate chart based on based data. */}
            {/* Currently, uses demo chart file. */}
            <img
              alt="chart"
              src={`${process.env.PUBLIC_URL}/demo-chart.png`}
              height="175px"
              width="175px"
              className="chart-img"
            />
          </div>
          <div className="col-md-9">
            {/* If data has been passed for this program as a prop, generate table */}
            {/* displaying last 3 days as a snapshot. */}
            {props.data ? (
              <div>
                <h5>Your last 3 entries</h5>
                <table className="mx-auto text-center table data-table">
                  <tbody>
                    <tr>
                      <th>Day</th>
                      <th>{props.type || "Frequency"}</th>
                    </tr>
                    {props.data.map((data) => {
                      return (
                        <tr>
                          <td>{data.date}</td> <td>{data.value}</td>{" "}
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
          </div>
        </div>
      </div>
      {/* Card footer */}
      <div className="card-footer d-flex flex-column">
        <div className="card-btn-holder align-self-end">
          <button
            className="btn bg-dark text-light view-entries-btn"
            onClick={props.viewEntries}
            data-toggle="modal"
            data-target="#form-modal"
          >
            View all entries
          </button>
          <button
            className="btn bg-dark text-light ml-3 add-entry-btn"
            onClick={props.addEntry}
            data-toggle="modal"
            data-target="#form-modal"
          >
            Add entry
          </button>
        </div>
      </div>
    </div>
  );
}
export default WorkoutCard;