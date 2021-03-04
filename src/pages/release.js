import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Release extends Component {
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    return (
      <div  id="content-wrapper">
      <Container fluid>
        {{this.props.match.param}}
      </Container>
      </div>
    );
  }
}

export default Release;
