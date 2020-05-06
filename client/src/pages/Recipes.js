import React, { Component } from 'react';
import RecipeCard from '../components/RecipeCard';
import API from '../utils/API';
import Nav from '../components/Nav';
import Wrapper from '../components/Wrapper';
import { InputGroup, Input, SearchBtn } from '../components/SearchBar';
import GridContainer from '../components/GridContainer';
import Footer from '../components/Footer';

class Recipes extends Component {
  state = {
    results: [],
    query: '',
  };

  componentDidMount = () => {
    this.searchRecipes('vegan');
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {
      this.searchRecipes(this.state.query);
    }
  };

  searchRecipes = query => {
    API.getRecipes(query).then(results => {
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
          <Nav />
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
                <GridContainer
                  style={{ 'grid-template-columns': '1fr 1fr 1fr' }}
                >
                  {this.state.results.map(recipe => (
                    <RecipeCard
                      image={recipe.recipe.image}
                      name={recipe.recipe.label}
                    />
                  ))}
                </GridContainer>
              </div>
            </div>
          </Wrapper>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Recipes;
