import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./components/NavBar/Nav";
import Form from "./components/Form";
import Footer from "./components/Footer/Footer";

//image
import map from "./images/map.png"

function Contact() {
  return (
    <div>
      <NavBar />
      <br /><br /><br /><br />
      <div className="section" data-aos="zoom-in-up" data-aos-duration="1000">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-p">
          <strong><em>We want to hear from you!</em></strong>
          <br />
          <br />
          Thank you for visiting our website. Please contact us with any questions or comments and we will respond as soon as possible.
          <br />
          <br />
          For general inquiries please email us at <a href="mailto:info@ayda.in">info@ayda.in</a>
          <br />
          <br />
          Currently we are not hiring anyone. But if you would like to apply for a position that might be available in the future, then please email us your CV and Website link/PDF of your work to <a href="mailto:info@ayda.in">info@ayda.in</a>. We will contact you if we are interested.
        </p>
        <br />
        <address>
          <strong>Office</strong><br />
          2338/49 Gandhi Nagar Opp. MIG Club,<br />
          Bandra East,
          Mumbai,<br />
          Maharashtra 400051,<br />
          India
        </address>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Architect+Yogesh+Dhaigude/@19.0568816,72.8453391,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7cf27ae09120f:0xd2cf514881c07906!8m2!3d19.0568759!4d72.8475429">
          <img className="map-img" src={map} alt="map" />
        </a>
      </div>
      <div className="contact-form">
        <Container>
          <Row>
            <Col md={6}><h1 data-aos="fade-right" data-aos-duration="2000">Have<br />Any<br />Questions?<br />Ask Us</h1></Col>
            <Col md={6}><Form aos="fade-left" duration="2000" /></Col>
          </Row>
        </Container>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;

