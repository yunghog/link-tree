import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faFacebook, faWhatsapp, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import "../css/style.css";
import hero1 from "../images/hero-1.jpg";
import avatar from "../images/avatar.jpg";
class home extends Component {
  render() {
    function darkTheme(){
      document.body.setAttribute('data-theme', 'dark');
    }
    return (
      <ga>
      <Container fluid id="themeSwitch">
        <Row noGutters><Col>
          <div className="header-con">
            <div className="header-img">
              <img src={hero1}/>
            </div>
            <div className="avatar">
              <img src={avatar}/>
            </div>
            <div className="title-text"><h1>Samartha</h1><h5>Developer | Beatmaker | Graphic Designer</h5></div>
          </div>
        </Col></Row>
      </Container>
      <br/>
      <Container>
      <Row xs={1} md={3}>
        <Col>
          <a href="http://github.com/yunghog" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h3>Github</h3>
                  <p>@yunghog</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col>
          <a href="http://youtube.com/c/YUNGHOGbeats" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h3>YouTube</h3>
                  <p>YUNGH OG Beats</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col>
          <a href="http://instagram.com/yungh_og_beats" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h3>Instagram</h3>
                  <p>@samartha__</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
      </Row>
      <button onClick={darkTheme}>theme</button>
    </Container>
  </ga>
    );
  }
}

export default home;
