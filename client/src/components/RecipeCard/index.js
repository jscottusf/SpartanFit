import React from "react";
import "./style.css";

function RecipeCard(props) {
  return (
    <div className="card promoting-card" id={`card-${props.id}`}>
      {/* Card content */}
      {/* Card Image */}
      <div className="card-body" style={{ height: "3%" }}>
        <div className="collapse-content">
          {/* Text */}
          <p className="card-text collapse" id="collapseContent">
            Recently, we added several exotic new dishes to our restaurant menu.
            They come from countries such as Mexico, Argentina, and Spain. Come
            to us, have some delicious wine and enjoy our juicy meals from
            around the world.
          </p>
          {/*Button*/}
          {/* <a
            className="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
            data-toggle="collapse"
            href="#collapseContent"
            aria-expanded="false"
            aria-controls="collapseContent"
          ></a> */}
          <i
            className="fas fa-share-alt text-muted float-right p-1 my-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Share this post"
          ></i>
          <i
            className="fas fa-heart text-muted float-right p-1 my-1 mr-3"
            data-toggle="tooltip"
            data-placement="top"
            title="I like it"
          ></i>
          <i
            className="fas fa-plus text-muted float-right p-1 my-1 mr-3"
            data-toggle="tooltip"
            data-placement="top"
            title="Add to My Recipes"
            onClick={() => props.favorite(props.id)}
          ></i>
        </div>
      </div>
      <div className="view overlay">
        <a
          href={props.link}
          id={`card-link-${props.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id={`card-image-${props.id}`}
            className="card-img-top rounded-0"
            src={props.image}
            alt={props.name}
          />
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>
      <div className="card-body d-flex flex-row">
        {/* Content */}
        <div>
          {/* Title */}
          <h4
            className="card-title font-weight-bold mb-2"
            id={`card-title-${props.id}`}
          >
            {props.name}
          </h4>
        </div>
      </div>
      {/* Card Content */}
    </div>
  );
}

export default RecipeCard;
