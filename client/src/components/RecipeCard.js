import React from "react";

function RecipeCard(props) {
  return (
    <div className="card" onClick={() => console.log("You clicked a recipe!")}>
      <div className="img-container">
        <img src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default RecipeCard;
