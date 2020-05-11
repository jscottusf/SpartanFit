import React, { Component } from 'react';
import API from '../utils/API';
import { Link } from 'react-router-dom';

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log('logging out');
    API.logout()
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch(error => {
        console.log('Logout error');
      });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Spartan<span className="text-info">Fit</span>
        </Link>
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
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === '/' ||
                  window.location.pathname === '/home'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to="/"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === '/profile'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === '/workouts'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to="/workouts"
              >
                Workouts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  window.location.pathname === '/recipes'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                to="/recipes"
              >
                Recipes
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ cursor: 'pointer' }}
              >
                Settings
              </div>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="#" className="dropdown-item" onClick={this.logout}>
                  <span className="text-secondary">logout</span>
                </Link>
                <Link className="dropdown-item" to="/">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">
                  Something else here
                </Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Find users"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
