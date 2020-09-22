import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div>
        <Router basename={window.location.pathname || ''}>
          <Route exact path="/"  component={home}/>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
