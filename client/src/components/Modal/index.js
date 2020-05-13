import React from "react";
import "./style.css";

// Modal to hold forms for submission.
function Modal(props) {
  return (
    <div id="form-modal" className="modal fade" role="dialog" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4>
              {props.status === "add-entry" ? "Add an Entry" : ""}
              {props.status === "add-workout" ? "Add a workout" : ""}
              {props.status === "view-entries" ? "View entries" : ""}
            </h4>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button className="btn bg-dark text-light" data-dismiss="modal">
              Close
            </button>
            <button
              className="btn bg-dark text-light"
              onClick={props.submit}
              data-dismiss="modal"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
