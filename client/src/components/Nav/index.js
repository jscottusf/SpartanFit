import React from "react";
//import { Link } from 'react-router-dom';
//import './style.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/home">
        Spartan<span className="text-info">Fit</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/workouts">
              Workouts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/recipes">
              Recipes
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Settings
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/home">
                Action
              </a>
              <a className="dropdown-item" href="/home">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/home">
                Something else here
              </a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="find users"
            aria-label="Search"
          />
          <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
    // <div classNameName="links">
    //   <Link
    //     to="/"
    //     classNameName={
    //       window.location.pathname === '/' ||
    //       window.location.pathname === '/search'
    //         ? 'search active'
    //         : 'saved'
    //     }
    //   >
    //     Search
    //   </Link>
    //   <Link
    //     to="/saved"
    //     classNameName={
    //       window.location.pathname === '/saved' ? 'saved active' : 'saved'
    //     }
    //     href="/saved"
    //   >
    //     Saved
    //   </Link>
    // </div>
  );
}

export default Nav;
