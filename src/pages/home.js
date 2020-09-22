import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Thumb} from '../components/thumb';
import {Links} from '../components/links';
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import hero1 from "../images/hero-1.jpg";
import avatar from "../images/avatar.jpg";
import load from "../images/loadingImg.png";
class home extends Component {
  constructor(props) {
      super(props);
      this.state={i: 0};
    };
   next=()=>{return(this.state.i=1)};
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    document.body.setAttribute('data-aos','fade');
    document.body.setAttribute('data-aos-delay','300');
    return (
      <div  id="content-wrapper">
      <Container fluid>
        <Row noGutters><Col>
          <div className="header-con">
            <div className="header-img">
              <img src={hero1}/>
            </div>
            <div className="avatar">
              <img src={avatar}/>
            </div>
            <div className="title-text"  data-aos="fade-up"><h1>Samartha</h1><h6>Developer | Beatmaker | Graphic Designer</h6></div>
          </div>
        </Col></Row>
      </Container>
      <br/>
      <Container>
      <Row xs={1} md={3}>
      {Links.map(data => (
        <Col data-aos="fade-right" data-aos-delay={(Links.indexOf(data)*100+300)%300}>
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
