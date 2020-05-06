import React from 'react';

export function Form({ children }) {
  return (
    <form id="register" action="/register" method="POST">
      {children}
    </form>
  );
}

export function Input(props) {
  return (
    <div className="form-group">
      <label for={props.for}>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        id={props.id}
        required
      />
    </div>
  );
}

export function SubmitBtn() {
  return (
    <button type="submit" className="btn btn-info">
      Register
    </button>
  );
}
