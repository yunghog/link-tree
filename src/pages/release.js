import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Releases} from '../components/new_release.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import nightmare from '../images/release/nightmare.jpg';
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Release extends Component {
  get_release(x){
    for(var i=0;i<Releases.length;i++){
      if(Releases[i].id==x){
        return(Releases[i]);
      }
    }
  }
  data=this.get_release(this.props.match.params.release);
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    return (
      <div  id="content-wrapper">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <div className="release-con">
                <div className="release">
                    <div className="release-img">
                      <img src={nightmare} alt={this.data.name}/>
                    </div>
                    <div className="release-name">
                      <h2>{this.data.name}</h2>
                      <p>{this.data.desc}</p>
                    </div>
                    <div className="release-links-con">
                      <div className="release-links">
                        <Row>
                          <Col xs={8}>
                            <h5><FontAwesomeIcon icon={faYoutube}/>
                            YOUTUBE</h5>
                          </Col>
                          <Col xs={4}>
                            <button href={this.data.yt}>play</button>
                          </Col>
                        </Row>
                      </div>
                      <div className="release-links">
                        <Row>
                          <Col xs={8}>
                            <h5><FontAwesomeIcon icon={faInstagram}/>
                            INSTAGRAM</h5>
                          </Col>
                          <Col xs={4}>
                            <button href={this.data.igtv}>play</button>
                          </Col>
                        </Row>
                      </div>
                      <div className="release-links">
                        <Row>
                          <Col xs={8}>
                            <h5><FontAwesomeIcon icon={faSoundcloud}/>
                            SOUNDCLOUD</h5>
                          </Col>
                          <Col xs={4}>
                            <button href={this.data.sc}>play</button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Release;
