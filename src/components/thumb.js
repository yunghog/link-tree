import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faInstagram, faFacebook, faWhatsapp, faLinkedin, faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faGlobe} from  '@fortawesome/free-solid-svg-icons'
import "../css/style.css";
export class Thumb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <a href={this.props.link} target="_blank">
        <div className="link-card">
          <Row noGutters>
            <Col xs={3}><div className="link-icon">
              <FontAwesomeIcon icon={this.props.icon}/>
            </div></Col>
            <Col xs={9}><div className="link-body">
              <h5>{this.props.site}</h5>
              <p>{this.props.uname}</p>
            </div></Col>
          </Row>
        </div>
      </a>
    );
  }
}
