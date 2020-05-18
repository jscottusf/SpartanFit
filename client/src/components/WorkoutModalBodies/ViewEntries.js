import React from "react";
import { format } from "date-fns";
import "./style.css";

function ViewEntries(props) {
  return props.data ? (
    <div>
      <table className="mx-auto text-center table data-table">
        <tbody>
          <tr>
            <th>Day</th>
            <th>{props.type || "Value"}</th>
            <th></th>
          </tr>
          {props.data.map((data) => {
            return (
              <tr>
                <td>{format(new Date(data.date), "MM-dd-yy")}</td>
                <td>{data.value}</td>
                <td
                  className="delete-btn"
                  onClick={() => props.delete(data._id)}
                  id={data._id}
                >
                  &times;
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <h6> No data yet! </h6>
  );
}

export default ViewEntries;
