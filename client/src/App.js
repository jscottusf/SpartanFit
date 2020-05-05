import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recipes from './components/Recipes';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/recipes" component={Recipes} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
