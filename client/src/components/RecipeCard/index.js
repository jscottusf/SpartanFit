import React from "react";
import "./style.css";

function RecipeCard(props) {
  return (
    <div className="card promoting-card" id={`card-${props.id}`}>
      {/* Card content */}
      {/* Card Image */}
      <div className="card-body" style={{ height: "3%" }}>
        {props.favorite ? (
          <i
            className="fas fa-plus text-muted float-right p-1 my-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Add to My Recipes"
            //   When this icon is clicked, save to MongoDB
            onClick={() => props.favorite(props.id)}
          ></i>
        ) : (
          <i
            className="fas fa-times float-right p-1 my-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Remove from My Recipes"
            //   When this icon is clicked, delete from MongoDB
            onClick={() => props.delete(props.id)}
          ></i>
        )}
        {props.favorite ? (
          <i
            className="fas fa-heart text-muted float-right p-1 my-1 mr-2"
            data-toggle="tooltip"
            data-placement="top"
            title="I like it"
          ></i>
        ) : (
          ""
        )}

        <i
          className="fas fa-share-alt text-muted float-right p-1 my-1 mr-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Share this post"
        ></i>
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
    </div>
  );
}

export default RecipeCard;
