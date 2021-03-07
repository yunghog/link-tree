import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Thumb} from '../components/thumb';
import {Links} from '../components/links';
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
    return (
      <div  id="content-wrapper">
      <Container fluid>
        <Row noGutters><Col>
          <div className="header-con">
            <div className="header-img">
              <img src={hero1} alt="samartha"/>
            </div>
            <div className="avatar">
              <img src={avatar} alt="samartha"/>
            </div>
            <div className="title-text"  data-aos="fade-up"><h1>Samartha</h1><h6>Developer | Graphic Designer</h6></div>
          </div>
        </Col></Row>
      </Container>
      <br/>
      <Container>
      <Row xs={1} md={3}>
      {Links.map(data => (
        <Col data-aos="fade-right" data-aos-delay={(Links.indexOf(data)*1000)%600}>
          <Thumb uname={data.username} link={data.link} site={data.site} icon={data.icon}/>
        </Col>
      ))}
      </Row>
      <br/>
    </Container>
  </div>
    );
  }
}

export default home;
