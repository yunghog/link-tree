import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faFacebook, faWhatsapp, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faGlobe} from  '@fortawesome/free-solid-svg-icons'
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../images/hero-1.jpg";
import avatar from "../images/avatar.jpg";
class home extends Component {
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    function darkTheme(){
      if(document.body.getAttribute('data-theme')=="light"){
        document.body.removeAttribute('data-theme');
      }
      else{
        document.body.setAttribute('data-theme', 'light');
      }
    }
    document.body.setAttribute('data-aos','fade');
    document.body.setAttribute('data-aos-delay','300');
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
            <div className="title-text"  data-aos="fade-up"><h1>Samartha</h1><h5>Developer | Beatmaker | Graphic Designer</h5></div>
          </div>
        </Col></Row>
      </Container>
      <br/>
      <Container>
      <Row xs={1} md={3}>
        <Col data-aos="fade-right" data-aos-delay={300}>
          <a href="http://github.com/yunghog" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>Github</h5>
                  <p>@yunghog</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={400}>
          <a href="http://youtube.com/c/YUNGHOGbeats" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>YouTube</h5>
                  <p>YUNGH OG Beats</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={500}>
          <a href="http://instagram.com/yungh_og_beats" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>Instagram</h5>
                  <p>@samartha__</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={300}>
          <a href="https://soundcloud.com/yunghog" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faSoundcloud}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>SoundCloud</h5>
                  <p>YUNGH OG beats</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={400}>
          <a href="https://www.linkedin.com/in/samartha-hm-7398861a1/" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>Linkedin</h5>
                </div>@Samartha Hm</Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={500}>
          <a href="mailto:samarthaog@gmail.com" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>Mail ID</h5>
                  <p>samarthaog@gmail.com</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={300}>
          <a href="http://www.ms800hub.rf.gd" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>MS800 Hub</h5>
                  <p>Join the crew</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={400}>
          <a href="https://yunghog.github.io" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>My Portfolio</h5>
                  <p>MERN Stack Website</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
        <Col data-aos="fade-right" data-aos-delay={500}>
          <a href="https://api.whatsapp.com/send?phone=918904460742" target="_blank">
            <div className="link-card">
              <Row noGutters>
                <Col xs={3}><div className="link-icon">
                  <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
                </div></Col>
                <Col xs={9}><div className="link-body">
                  <h5>Whatsapp</h5>
                  <p>Text</p>
                </div></Col>
              </Row>
            </div>
          </a>
        </Col>
      </Row>
      <br/>
      <button className="btn btn-1" onClick={darkTheme}>Switch Theme</button>
    </Container>
    <Container>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  </ga>
    );
  }
}

export default home;
