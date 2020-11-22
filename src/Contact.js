import React from "react";
import MyNav from "./components/Nav";
import MapContainer from "./components/Map";
import Footer from "./components/Footer";

function Contact() {
    return (
      <div>
        <MyNav/>
        <br/><br/><br/><br/>
        <div className="section" data-aos="zoom-in-up" data-aos-duration="1000">
            <h1 className="section-title">Contact Us</h1>
            <p className="section-p">
              <strong><em>We want to hear from you!</em></strong>
              <br/>
              <br/>
              Thank you for visiting our website. Please contact us with any questions or comments and we will respond as soon as possible.
              <br/>
              <br/>
              For general inquiries please email us at <a href="mailto:info@ayda.in">info@ayda.in</a>
              <br/>
              <br/>
              Currently we are not hiring anyone. But if you would like to apply for a position that might be available in the future, then please email us your CV and Website link/PDF of your work to <a href="mailto:info@ayda.in">info@ayda.in</a>. We will contact you if we are interested.
            </p>
            <br/>
            <address>
              <strong>Office</strong><br/>
              581/33, Adarsh Nagar,<br/>
              Worli,
              Mumbai 400030,<br/>
              Maharashtra,<br/> 
              India
            </address>
        </div>
        <div data-aos="zoom-in-up" data-aos-duration="1000">
        <MapContainer/>
        </div>
        <div className="footerC" style={{marginTop:"100vh"}}>
            <div className="footer-C-sub">              
              <Footer/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Contact;

 