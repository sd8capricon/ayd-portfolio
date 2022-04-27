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
          581/33, Adarsh Nagar,<br />
          Worli,
          Mumbai 400030,<br />
          Maharashtra,<br />
          India
        </address>
      </div>
      <div data-aos="zoom-in-up" data-aos-duration="1000">
        <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Architect+Yogesh+Dhaigude/@19.0146542,72.8223423,15z/data=!4m2!3m1!1s0x0:0xd2cf514881c07906?sa=X&ved=2ahUKEwjm2665_KLtAhWCyzgGHW1RA4EQ_BIwE3oECBIQAw">
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

