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
      <div className="container-fluid ml-1">
        <div className="row">
          <div className="col-md-5">
            <label style={{ padding: 0, margin: "10px 0px 0px 0px" }}>
              Recipe Search
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <form id="query-form" style={{ display: "inline" }}>
              <input
                type="text"
                value={this.state.query}
                name="query"
                id="query-input"
                className="my-3"
                size="30"
                onChange={this.handleInputChange}
              />
            </form>
            <button
              type="submit"
              className="btn ml-1"
              onClick={this.handleFormSubmit}
              id="submit-form-btn"
              form="query-form"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipes;
