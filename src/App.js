import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from './containers/Login';
import HomePage from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={HomePage} />
        </main>
      </Router>
    );
  }
}

export default App;
