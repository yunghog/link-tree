import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
import Release from "./pages/release";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Route exact path="/"  component={home}/>
            <Route path="/release/:release"  component={Release}/>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
