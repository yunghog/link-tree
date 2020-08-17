import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Footer extends Component {
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    function switchTheme(){
      var theme = document.getElementById('theme-select').value;
      document.body.setAttribute('data-theme', theme);
    //   if(document.body.getAttribute('data-theme')=="light"){
    //     document.body.removeAttribute('data-theme');
    //   }
    //   else{
    //     document.body.setAttribute('data-theme', 'light');
    //   }
    }
    document.body.setAttribute('data-aos','fade');
    document.body.setAttribute('data-aos-delay','300');
    return (
      <footer class="footer">
      <Container>
        <Row>
          <Col md={12} className="text-center">

          </Col>
        </Row>
        <Row>
          <Col md={6} className="text-center">
            Switch Theme
            <select onChange={switchTheme} id="theme-select">
              <option value="dark">Dark</option>
              <option selected value="light">Light</option>
            </select>
          </Col>
          <Col md={6} className="text-center">
              <p>
              © 2020 All rights reserved | Samartha
              </p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  }
}

export default Footer;
