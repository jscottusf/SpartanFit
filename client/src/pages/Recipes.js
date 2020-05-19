import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard';
import API from '../utils/API';
import SearchBar from '../components/SearchBar';
import GridContainer from '../components/GridContainer';
import { Container } from '../components/Grid';

class Recipes extends Component {
  state = {
    id: null,
    results: [],
    query: '',
    saved: [],
  };

  // Upon initial render, populate recipe cards with default search "vegan"
  componentDidMount = () => {
    this.setState({
      id: this.props.id,
    });
    this.searchRecipes('vegan');
  };

  // Handles changes in input of form
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // When recipe card favorite button clicked, create object and insert into MongoDB.
  handleFavoriteClick = id => {
    let savedRecipe = {
      title: document.getElementById('card-title-' + id).textContent,
      image: document.getElementById('card-image-' + id).getAttribute('src'),
      link: document.getElementById('card-link-' + id).getAttribute('href'),
    };
    if (!this.state.saved.includes(id)) {
      this.setState({ saved: this.state.saved.concat([id]) });
    }
    this.saveRecipe(savedRecipe);
  };

  // When search form submitted, search for recipes
  handleFormSubmit = event => {
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
      this.setState({ results: res.data.meal });
    });
  };

  // Post recipes to MongoDB
  saveRecipe = recipe => {
    API.postMeal(this.props.id, recipe).then((res, err) => {
      if (err) {
        console.log(err);
      }
      console.log('Save successful.');
    });
  };

  // Search for recipes using Edamam API
  searchRecipes = query => {
    API.getMeals(query).then(results => {
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
          <GridContainer style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            {/* Generate recipe cards for each result */}
            {this.state.results.map((recipe, index) => (
              <RecipeCard
                key={index}
                id={index}
                image={recipe.recipe.image}
                name={recipe.recipe.label}
                link={recipe.recipe.link}
                favorite={this.handleFavoriteClick}
                saved={this.state.saved.includes(index) ? true : false}
              />
            ))}
          </GridContainer>
        </div>
      </Container>
    );
  }
}

export default Recipes;
