import React, { Component } from "react";
import RecipeCard from "../components/RecipeCard";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import { InputGroup, Input, SearchBtn } from "../components/SearchBar";
import GridContainer from "../components/GridContainer";
import Footer from "../components/Footer";

class Recipes extends Component {
  state = {
    id: null,
    results: [],
    query: "",
  };

  // Upon initial render, populate recipe cards with default search "vegan"
  componentDidMount = () => {
    this.setState({
      id: this.props.id,
    });
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
    console.log(savedRecipe);
    this.saveRecipe(savedRecipe);
  };

  // When search form submitted, search for recipes
  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.searchRecipes(this.state.query);
    }
  };

  loadUserRecipes = () => {
    API.getMealsByUser(this.props.id).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log("Load successful");
      this.setState({ results: res.data.meal });
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
      <div>
        <div className="recipes">
          <Wrapper>
            <div className="main-container">
              <div className="recipe-search">
                <h5>Recipe Search</h5>
                <InputGroup>
                  <Input
                    type="text"
                    value={this.state.query}
                    name="query"
                    id="query-input"
                    className="my-3"
                    size="30"
                    onChange={this.handleInputChange}
                  />
                  <SearchBtn
                    onClick={this.handleFormSubmit}
                    id="submit-form-btn"
                    form="query-form"
                  />
                </InputGroup>
                <button onClick={this.loadUserRecipes} className="btn mb-2">
                  <u>See My Favorites</u>
                </button>
              </div>
              <GridContainer style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
                {/* Generate recipe cards for each result */}
                {this.state.results.map((recipe, index) => (
                  <RecipeCard
                    key={index}
                    id={index}
                    image={recipe.image ? recipe.image : recipe.recipe.image}
                    name={recipe.title || recipe.recipe.label}
                    link={recipe.link || recipe.recipe.link}
                    favorite={this.handleFavoriteClick}
                  />
                ))}
              </GridContainer>
            </div>
          </Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Recipes;
