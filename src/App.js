import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
class App extends Component {
  render() {
    return (
        <Router basename={window.location.pathname || ''}>
          <Route exact path="/"  component={home}/>
        </Router>
    );
  }
}

export default App;
