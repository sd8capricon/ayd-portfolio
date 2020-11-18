import React from "react";
import MyNav from "./components/Nav";
import {Nav} from "react-bootstrap";
import Services from "./components/Services";
import "./App.css"

function About() {
    return (
      <div>
        <MyNav/>
        <br/>
        <Nav className="justify-content-center aboutNav" activeKey="/home" style={{backgroundColor:"black", padding:"0.5%"}}>
          <Nav.Item>
            <Nav.Link href="#ABOUT">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#DESIGN PHILOSOPHY">Design Philosophy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#SERVICES">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#PUBLICATIONS">Publications</Nav.Link>
          </Nav.Item>
        </Nav>
        
        <div className="about-section" id="ABOUT" data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className="project-title">ABOUT US</h1>
          <p className="about-p">
            We are an established multi-desciplinary comprehensive Architectural practice based in Mumbai & Thane, founded by Architect Yogesh Dhaigude with extensive experience in developing a wide range of projects such as Redevelopment of large and small scale residential projects, masterplanning schemes, commercial buildings with expertise in integration of MEP services and structure with design at an advance and complex level in view of time and cost efficiency. We are committed to designing high quality buildings that meet the needs and aspirations of clients and users alike and achieve complete client satisfaction.
          </p>
          <ul className="about-list">
            <li>
              <h4><em>Our Priority</em></h4>
              <p>To provide full architectural & Engineering consulting services including complete project management and visualization to our clients with provision of technical documentation and contract administration.</p>
            </li>
            <li>
              <h4><em>Our Objective</em></h4>
              <p>Provide professional quality services on time and on budget. Innovative and economical design services, maintaining state-of-the-art design technology. Implement and maintain a quality control and assurance policy. Value integrity, honesty, creativity and respect our relationships with our clients</p>
            </li>
            <li>
              <h4><em>Our Core Strength</em></h4>
              <p>Our strength has always been our eagerness to explore and experiment; in fact we look forward to innovating and have often done so.</p>
            </li>
          </ul>
        </div>
        <div className="about-section" id="DESIGN PHILOSOPHY" style={{backgroundColor:"black", color:"white"}} data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className="project-title" >DESIGN PHILOSOPHY</h1>
            <p className="about-p">To translate client’s needs and aspirations into innovative design solutions having <strong>SUSTAINABLE</strong> and lasting qualities and creating spaces that are <strong>AFFORDABLE, LIVABLE</strong>, pleasant and inspirational with functional form to celebrate <strong>IDENTITY.</strong></p>
            <br/>
            <ul className="about-list">
              <li>
                <h4><em>SUSTAINABLE</em></h4>
                <p>To provide full architectural & Engineering consulting services including complete project management and visualization to our clients with provision of technical documentation and contract administration.</p>
              </li>
              <li>
                <h4><em>AFFORDABLE</em></h4>
                <p>Provide professional quality services on time and on budget. Innovative and economical design services, maintaining state-of-the-art design technology. Implement and maintain a quality control and assurance policy. Value integrity, honesty, creativity and respect our relationships with our clients</p>
              </li>
              <li>
                <h4><em>LIVABLE</em></h4>
                <p>BUILDING SMART COMMUNITIES WITH FUNCTIONAL DESIGN BY Placing user at Centre of Design Interactive, Engaging, healthy & Safe Indoor Environment Use of Technology as means to an end</p>
              </li>
              <li>
                <h4><em>IDENTITY</em></h4>
                <p>WE THINK BUILDINGS ARE PLACES OF HUMAN INTERACTIONS AND OUR BUILDINGS RESPONDS TO CLIMATE AND ECOLOGY AND ARCHITECTURALLY CELEBRATES ITS IDENTITY</p>
              </li>
            </ul>
        </div>
        <div className="about-section" id="SERVICES" data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className="project-title" >Services</h1>
          <h2>We provide integrated specialised services in</h2>
          <br/>
          <br/>
          <ul className="list-unstyled">
              <Services service="ARCHITECTURAL DESIGN"/>
              <Services service="PROJECT MANAGEMENT"/>
              <Services service="URBAN DESIGN & MASTERPLANNING"/>
              <Services service="INTERIOR DESIGN"/>
              <Services service="LIASONING"/>
              <Services service="LANDSCAPE DESIGN"/>
              <Services service="MEP & DESIGN COORDINATION"/>
              <Services service="3D VISUALISATION"/>
          </ul>
        </div>
        <div className="about-section" id="PUBLICATIONS" style={{backgroundColor:"black", color:"white"}} data-aos="zoom-in-up" data-aos-duration="1000">
          <h1 className="project-title" id="PUBLICATIONS">Publications</h1>
          <ul className="about-list pub">
            <li><h5>2010 : Urban Renewal of MIDC Area in Thane (<a rel="noreferrer" target="_blank" href="https://www.academia.edu/40048503/URBAN_RENEWAL_OF_MIDC_IN_THANE_Yogesh_Dhaigude">www.Academia.edu</a>)</h5></li>
            <br/>
            <li><h5>2011 : Mega events: An Opportunity for Urban and Regional Planning (<a rel="noreferrer" target="_blank" href="https://www.academia.edu/7550846/Mega_Events_An_opportunity_for_Urban_and_regional_development">www.Academia.edu</a>)</h5></li>
            <br/>
            <li><h5>2016 : Integrated Zonal Development Plan for Worli Village, Mumbai</h5></li>
            <br/>
            <li><h5>2017 : पुनर्विकासाची स्वयंपूर्ण वाटचाल…</h5></li>
            <br/>
            <li><h5>2020 : New paper article on self-redevelopment</h5></li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default About;
  