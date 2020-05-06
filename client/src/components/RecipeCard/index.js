import React from "react";
import "./style.css";

/* Old Recipe Card
function RecipeCard(props) {
  return (
    <div
      className="card"
      style={{
        height: "200px",
        margin: "0px, 10px, 0px, 10px",
        width: "150px",
      }}
      onClick={() => console.log("You clicked a recipe!")}
    >
      <div className="card-header"></div>
      <div className="img-container">
        <img
          style={{ height: "150px", width: "150px" }}
          src={props.image}
          alt={props.name}
        />
      </div>
    </div>
  );
}
*/

function RecipeCard(props) {
  return (
    <div class="card promoting-card">
      {/* Card content */}
      <div class="card-body d-flex flex-row">
        {/* Content */}
        <div>
          {/* Title */}
          <h4 class="card-title font-weight-bold mb-2">{props.name}</h4>
        </div>
      </div>

      {/* Card Image */}
      <div class="view overlay">
        <img
          class="card-img-top rounded-0"
          src={props.image}
          alt={props.name}
        />
        <a href="#!">
          <div class="mask rgba-white-slight"></div>
        </a>
      </div>

      {/* Card Content */}
      <div class="card-body">
        <div class="collapse-content">
          {/* Text */}
          <p class="card-text collapse" id="collapseContent">
            Recently, we added several exotic new dishes to our restaurant menu.
            They come from countries such as Mexico, Argentina, and Spain. Come
            to us, have some delicious wine and enjoy our juicy meals from
            around the world.
          </p>
          {/*Button*/}
          <a
            class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
            data-toggle="collapse"
            href="#collapseContent"
            aria-expanded="false"
            aria-controls="collapseContent"
          ></a>
          <i
            class="fas fa-share-alt text-muted float-right p-1 my-1"
            data-toggle="tooltip"
            data-placement="top"
            title="Share this post"
          ></i>
          <i
            class="fas fa-heart text-muted float-right p-1 my-1 mr-3"
            data-toggle="tooltip"
            data-placement="top"
            title="I like it"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
