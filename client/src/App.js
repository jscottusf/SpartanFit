import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Recipes from "./pages/Recipes";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workouts from "./pages/Workouts";
import Nav from "./components/Nav";
import API from "./utils/API";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      userId: null,
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
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userId: response.data.user._id,
        });
      } else {
        this.setState({
          loggedIn: false,
          username: null,
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
            <p className="text-dark">Welcome, {this.state.username}!</p>
          )} */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route
            exact
            path="/workouts"
            currentUser={this.state.username}
            render={() => <Workouts user={this.state.userId} />}
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
