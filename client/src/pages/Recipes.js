import React, { Component } from "react";
import RecipeCard from "../components/RecipeCard";
import API from "../utils/API";
import SearchBar from "../components/SearchBar";
import GridContainer from "../components/GridContainer";
import { Container } from "../components/Grid";

class Recipes extends Component {
  state = {
    id: null,
    results: [],
    query: "",
    favorites: [],
    favoriteIDs: [],
  };

  // Upon initial render, populate recipe cards with default search "vegan"
  componentDidMount = () => {
    this.searchRecipes("vegan");
    this.loadUserRecipes();
  };

  deleteRecipe = (title) => {
    //Get index of title, then use that index to grab ID.
    let index = this.state.favorites.indexOf(title);
    let mealId = this.state.favoriteIDs[index];
    //Use that ID to delete.
    API.deleteMeal(mealId).then((res, err) => {
      if (err) {
        console.log(err);
      }
      //When recipes are deleted, reload user favorites to handle color change of heart icon.
      this.loadUserRecipes();
    });
  };

  // Handles changes in input of form
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // When recipe card favorite button clicked, create object and insert into MongoDB.
  handleFavoriteClick = (id) => {
    //Grab card elements to prepare to post to MongoDB.
    let savedRecipe = {
      title: document.getElementById("card-title-" + id).textContent,
      image: document.getElementById("card-image-" + id).getAttribute("src"),
      link: document.getElementById("card-link-" + id).getAttribute("href"),
    };
    //If card not currently in favorites, save recipe.
    if (!this.state.favorites.includes(savedRecipe.title)) {
      this.saveRecipe(savedRecipe);
      /*
      Legacy code for changing heart color.
      Keeping it here for future debugging of favorite0click latency.
      this.setState({
        favorites: this.state.favorites.concat([savedRecipe.title]),
      });
           
      document
        .getElementById("favorite-icon-" + id)
        .classList.remove("text-muted");
      document
        .getElementById("favorite-icon-" + id)
        .classList.add("new-favorite-meal");
      */
    } else {
      //If recipe already in favorites, delete recipe.
      this.deleteRecipe(savedRecipe.title);
      /*
      Legacy code for changing heart color.
      Keeping it here for future debugging of favorite0click latency.
      this.setState({
        favorites: this.state.favorites.filter(
          (meal) => meal !== savedRecipe.title
        ),
      });
      document
        .getElementById("favorite-icon-" + id)
        .classList.remove("new-favorite-meal");
      document
        .getElementById("favorite-icon-" + id)
        .classList.add("text-muted");
      */
    }
  };

  // When search form submitted, search for recipes
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.searchRecipes(this.state.query);
    }
  };

  loadUserRecipes = () => {
    //Grabs user meals
    API.getMealsByUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      //Arrays to save titles of user meals and corresponding IDs
      let userFavorites = [];
      let savedMealIds = [];
      //For each meal, push the title and the id into the corresponding array.
      //The indexes of the titles and ids will match.
      res.data.meal.forEach((meal) => {
        userFavorites.push(meal.title);
        savedMealIds.push(meal._id);
      });
      //Set the state to hold the titles and ids.
      this.setState({ favorites: userFavorites, favoriteIDs: savedMealIds });
    });
  };

  // Post recipes to MongoDB
  saveRecipe = (recipe) => {
    API.postMeal(this.props.id, recipe).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log("Save successful.");
      this.loadUserRecipes();
    });
  };

  // Search for recipes using Edamam API
  searchRecipes = (query) => {
    API.getMeals(query).then((results) => {
      console.log(results);
      this.setState({
        results: results.data.hits,
      });
    });
  };

  render() {
    return (
      <Container>
        <div className="recipes">
          <SearchBar
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            value={this.state.query}
          />
          <GridContainer style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
            {/* Generate recipe cards for each result */}
            {this.state.results.map((recipe, index) => (
              <RecipeCard
                key={index}
                id={index}
                image={recipe.recipe.image}
                name={recipe.recipe.label}
                link={recipe.recipe.url}
                favorite={this.handleFavoriteClick}
                //If meal is in favorites, this is used to change heart icon color in recipe card.
                savedMeal={
                  this.state.favorites.includes(recipe.recipe.label)
                    ? true
                    : false
                }
              />
            ))}
          </GridContainer>
        </div>
      </Container>
    );
  }
}

export default Recipes;
