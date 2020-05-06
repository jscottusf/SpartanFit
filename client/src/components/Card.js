import React from 'react';

//card should be wrapped in a <div> with classNameName attributes
function Card(props) {
  return (
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.stuff}</h6>
      <div className="card-text mb-1">{props.stuff}</div>
      <a href={props.link} className="card-link">
        {props.stuff}
      </a>
    </div>
  );
}

export default Card;
