import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <ga>
        <Router basename={window.location.pathname || ''}>
          <Route exact path="/"  component={home}/>
        </Router>
        <Footer/>
      </ga>
    );
  }
}

export default App;
