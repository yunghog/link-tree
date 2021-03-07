import React, { Component } from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";
import Release from "./pages/release";
import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/"  component={home}/>
            <Route path="/release/:release"  component={Release}/>
        </HashRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;
