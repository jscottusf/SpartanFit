import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workouts from "./pages/Workouts";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      id: null,
      redirectTo: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    API.checkLogin().then((response) => {
      if (response.data.user) {
        console.log(response.data.user);
        this.setState({
          username: response.data.user.username,
          id: response.data.user._id,
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null,
          id: null,
        });
      }
    });
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <div className="App">
          <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
          {/* {this.state.loggedIn && (
            <div>
              <p className="text-dark">Welcome, {this.state.id}!</p>

              <p className="text-dark">Welcome, {this.state.username}!</p>
            </div>
          )} */}
          <Route
            exact
            path="/"
            render={() => <Home loggedIn={this.state.loggedIn} />}
          />
          <Route
            exact
            path="/home"
            render={() => <Home loggedIn={this.state.loggedIn} />}
          />
          <Route
            exact
            path="/Profile"
            render={() => <Profile id={this.state.id} />}
          />
          <Route
            exact
            path="/recipes"
            render={() => <Recipes id={this.state.id} />}
          />
          <Route
            exact
            path="/workouts"
            currentUser={this.state.username}
            render={() => <Workouts id={this.state.id} />}
          />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login updateUser={this.updateUser} />}
          />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route exact path="/register" render={() => <Register />} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
