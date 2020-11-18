import React from "react";
import MyNav from "./components/Nav";
import MapContainer from "./components/Map";
import { Col, Row, Container } from "react-bootstrap";

function Contact() {
    return (
      <div>
        <MyNav/>
        <br/><br/><br/><br/>
        <Container style={{paddingTop:"2%"}}>
            <Row data-aos="zoom-out-up" data-aos-duration="800">
                <Col lg={6}>
                    <h2>You can visit us at</h2>
                    <h3>Your Name</h3>
                    <p>name@example.com</p>
                    <address>
                        Your Address<br/>
                        line2 <br/>
                        line3<br/>
                    </address>
                    <p>Phone -0123456789</p>
                </Col>
                <Col lg={6}>
                    <h2>You can also contact us at</h2>
                    <ul className="contact-links">
                      <li><i class="fas fa-envelope fa-3x contact-ico">name@example.com</i></li>
                      <li><i class="fab fa-linkedin fa-3x contact-ico">Linked In</i></li>
                      <li><i class="fab fa-blogger fa-3x contact-ico">Blogger</i></li>
                    </ul>
                </Col>
            </Row>
            <Row data-aos="fade-up" data-aos-duration="1000">
              <Col className="contact-map">
                    <MapContainer/>
              </Col> 
            </Row>
        </Container>        
      </div>
    );
  }
  
  export default Contact;

 