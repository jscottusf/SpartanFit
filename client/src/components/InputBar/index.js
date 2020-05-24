import React from 'react';
import './style.css';

export function InputBar(props) {
  return (
    <form id={props.barName} className="input-group mb-3 search searchbar">
      {props.children}
    </form>
  );
}

export function BarInput(props) {
  return (
    <input
      {...props}
      // type="text"
      className="form-control"
      // placeholder="Low carb? Gluten Free? Vegan?"
      // onChange={props.handleInputChange}
      // value={props.value}
      // name="query"
    />
  );
}

export function InputBarBtn(props) {
  return (
    <div className="input-group-append">
      <button
        {...props}
        className="btn btn-info"
        //   type="submit"
        //   onClick={props.handleFormSubmit}
      >
        {props.label}
      </button>
    </div>
  );
}
