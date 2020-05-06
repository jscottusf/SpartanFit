import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SaveBtn(props) {
  return (
    <Link to="/saved">
      <div
        className="icon"
        onClick={() =>
          props.saveBook(
            props.title,
            props.author,
            props.description,
            props.image,
            props.info,
            props.preview
          )
        }
        role="button"
        tabIndex="0"
      >
        <i className="fas fa-heart icon"></i>
      </div>
    </Link>
  );
}

export default SaveBtn;
