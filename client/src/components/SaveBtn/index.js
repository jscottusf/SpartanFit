import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SaveBtn(props) {
  return (
    <buttun className="btn btn-info profile-edit-btn" {...props}>
      {props.label}
    </buttun>
  );
}

export default SaveBtn;
