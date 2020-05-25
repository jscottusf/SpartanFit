import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function PostCard(props) {
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-2 sm-3">
          <Link to={'/users/' + props.username}>
            <div id="postImgDiv">
              <img id="postImg" src={props.image} alt="profile-pic" />
            </div>
          </Link>
        </div>
        <div className="col-10 sm-9">
          <h5 className="card-title mb-2">
            {props.firstName} {props.lastName}
          </h5>
          <div className="card-text mb-1">{props.postBody}</div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
