import React from "react";

function ViewEntries(props) {
  return props.data ? (
    <div>
      <h5>Your entries</h5>
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
      </table>{" "}
    </div>
  ) : (
    <h6> No data yet! </h6>
  );
}

export default ViewEntries;

// onChange={props.handleInputChange}
