import React from 'react';
import './style.css';

function SearchBar(props) {
  return (
    <form className="input-group mb-3 search searchbar">
      <input
        type="text"
        id="searchbar"
        className="form-control"
        placeholder="Low carb? Gluten Free? Vegan?"
        onChange={props.handleInputChange}
        value={props.value}
        name="query"
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Find Recipes
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
