import React from 'react';
import './style.css';

export function InputGroup({ children }) {
  return <div className="input-group mb-3">{children}</div>;
}

export function Input(props) {
  return <input {...props} className="form-control" />;
}

export function SearchBtn(props) {
  return (
    <button {...props} className="btn btn-outline-info" type="button">
      Search
    </button>
  );
}
