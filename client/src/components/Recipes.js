import React, { Component } from "react";
import API from "../utils/API";

class Recipes extends Component {
  state = {
    results: [],
    query: "",
  };

  componentDidMount = () => {
    this.searchRecipes("vegan");
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.query) {
      this.searchRecipes(this.state.query);
    }
  };

  searchRecipes = (query) => {
    API.getRecipes(query).then((results) => {
      console.log(results);
      this.setState({
        results: results.data.hits,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <form id="query-form">
            <div>
              <label>Search for Recipes</label>
            </div>
            <input
              type="text"
              value={this.state.query}
              name="query"
              id="query-input"
              className="my-3"
              size="50"
              onChange={this.handleInputChange}
            />
          </form>
          <button
            type="submit"
            className="btn bg-primary"
            onClick={this.handleFormSubmit}
            form="query-form"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Recipes;
