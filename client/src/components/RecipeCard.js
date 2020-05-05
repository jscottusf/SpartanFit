import React from "react";

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

export default RecipeCard;
