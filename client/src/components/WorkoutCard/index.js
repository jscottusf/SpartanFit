import React from "react";
import "./style.css";
import { PromiseProvider } from "mongoose";

function WorkoutCard(props) {
  return (
    <div className="workout-well card my-4 w-100">
      <div className="card-header">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h2>Bicep Curls</h2>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p></p>
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <img
              alt="chart"
              src={`${process.env.PUBLIC_URL}/demo-chart.png`}
              height="175px"
              width="175px"
            />
          </div>
          <div className="col-md-9">
            {props.data ? (
              <div>
                <h5>Your last 3 entries</h5>
                <table className="mx-auto text-center table data-table">
                  <tr>
                    <th>Day</th>
                    <th>{props.data.type || "Frequency"}</th>
                  </tr>
                  {props.data.map((data) => {
                    return (
                      <tr>
                        <td>{data.date}</td> <td>{data.value}</td>{" "}
                      </tr>
                    );
                  })}
                </table>
                <hr className="w-100" />
              </div>
            ) : (
              <h3>"No data yet!" </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
//type, date, value
export default WorkoutCard;
