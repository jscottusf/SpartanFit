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
  };

  // Upon initial render, populate recipe cards with default search "vegan"
  componentDidMount = () => {
    this.setState({
      id: this.props.id,
    });
    this.loadUserRecipes();
    this.searchRecipes("vegan");
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
    let savedRecipe = {
      title: document.getElementById("card-title-" + id).textContent,
      image: document.getElementById("card-image-" + id).getAttribute("src"),
      link: document.getElementById("card-link-" + id).getAttribute("href"),
    };
    if (!this.state.favorites.includes(savedRecipe.title)) {
      this.setState({
        favorites: this.state.favorites.concat([savedRecipe.title]),
      });
      this.saveRecipe(savedRecipe);
      document
        .getElementById("favorite-icon-" + id)
        .classList.remove("text-muted");
      document
        .getElementById("favorite-icon-" + id)
        .classList.add("new-favorite-meal");
    } else {
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
    }
  };

  // When search form submitted, search for recipes
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.searchRecipes(this.state.query);
    }
    this.setState({ saved: [] });
  };

  loadUserRecipes = () => {
    API.getMealsByUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      let userFavorites = [];
      res.data.meal.forEach((meal) => userFavorites.push(meal.title));
      this.setState({ favorites: userFavorites });
    });
  };

  // Post recipes to MongoDB
  saveRecipe = (recipe) => {
    API.postMeal(this.props.id, recipe).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log("Save successful.");
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
