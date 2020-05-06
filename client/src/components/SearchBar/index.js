import React from 'react';
import './style.css';

function SearchBar(props) {
  return (
    <form className="input-group mb-3 search searchbar">
      <input
        type="text"
        className="form-control"
        placeholder="search by author or book title"
        onChange={props.handleInputChange}
        value={props.search}
      />
      <div className="input-group-append">
        <button
          className="btn btn-info"
          type="submit"
          onClick={props.handleFormSubmit}
        >
          Find
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
