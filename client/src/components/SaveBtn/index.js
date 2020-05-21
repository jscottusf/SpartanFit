import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SaveBtn(props) {
  return (
    <button className="btn btn-info profile-edit-btn" {...props}>
      {props.label}
    </button>
  );
}

export default SaveBtn;
