import React from "react";
import "./style.css";

function Modal(props) {
  console.log(props.show);
  let showOrHide = props.show
    ? "modal display-block d-flex flex-column z-index: 2"
    : "modal hidden-modal display-none d-flex flex-column";

  return (
    <div
      className={
        props.show
          ? "modal display-block d-flex flex-column z-index: 2"
          : "modal hidden-modal display-none d-flex flex-column"
      }
    >
      <div className="modal-main">{props.children}</div>
      <button
        className="btn bg-dark text-light align-self-end"
        onClick={props.close}
      >
        Close
      </button>
    </div>
  );
}

export default Modal;
