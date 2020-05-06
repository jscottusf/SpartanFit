import React from 'react';
import './style.css';

function DeleteBtn(props) {
  return (
    <div
      className="icon"
      onClick={() => props.handleIconClick(props.id)}
      role="button"
      tabIndex="0"
    >
      <i className="fas fa-trash icon"></i>
    </div>
  );
}

export default DeleteBtn;
