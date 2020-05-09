import React from "react";
import "./style.css";

function Modal(props) {
  return (
    <div id="form-modal" className="modal fade" role="dialog" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">Heading</div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer">
            <button className="btn bg-dark text-light" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

/*
      function Modal(props) {
  return (
    <div
      className={
        props.show
          ? "modal d-flex flex-column z-index: 2"
          : "modal hidden-modal display-none"
        // d-flex flex-column
      }
      role="dialog"
      tabindex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">Heading</div>
          <div className="modal-body">{props.children}</div>
          <div classname="modal-footer">
            <button className="btn bg-dark text-light">
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


*/

/* align-self-end Close */

/* onClick={props.close} */
