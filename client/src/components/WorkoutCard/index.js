import React from "react";
import "./style.css";
import { format } from "date-fns";
import { PromiseProvider } from "mongoose";

// Card will house information about individual exercises.
function WorkoutCard(props) {
  return (
    <div className="accordion" id={`accordian-${props.id}`}>
      <div className="workout-well card my-3 w-100">
        {/* Card header */}
        <div
          className="card-header"
          data-toggle="collapse"
          data-target={`#workout-collapse-${props.id}`}
        >
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
        <div
          className="collapse"
          id={`workout-collapse-${props.id}`}
          data-parent={`#accordian-${props.id}`}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 d-flex flex-column justify-content-center">
                {/* Houses chart for workout progress. */}
                {props.chart}
              </div>
              <div className="col-md-6">
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
                              <td>{format(new Date(data.date), "MM-dd-yy")}</td>{" "}
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
              </div>
            </div>
          </div>
          {/* Card footer */}
          <div className="card-footer">
            <div className="row">
              <div className="col-md-5 d-flex flex-column">
                <button
                  className="btn bg-danger text-light d-flex align-self-start delete-workout-btn"
                  onClick={props.delete}
                >
                  Delete
                </button>
              </div>
              <div className="col-md-7 d-flex flex-column">
                <div className="card-btn-holder d-flex align-self-end">
                  <button
                    className="btn bg-dark text-light view-entries-btn"
                    onClick={props.viewChart}
                    data-toggle="modal"
                    data-target="#form-modal"
                  >
                    View full chart
                  </button>
                  <button
                    className="btn bg-dark text-light ml-3 view-entries-btn"
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
          </div>
        </div>
      </div>
    </div>
  );
}
export default WorkoutCard;
