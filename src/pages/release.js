import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Releases} from '../components/new_release.js'
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
      <Container fluid>
      <h1>HAAAAAAAAA</h1>
      {this.data.name}
      {this.data.yt}
      {this.data.sc}
      {this.data.igtv}
      </Container>
      </div>
    );
  }
}

export default Release;
