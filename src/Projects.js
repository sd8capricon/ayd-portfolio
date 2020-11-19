import React from "react";
import MyNav from "./components/Nav";
import ProjectView from "./components/ProjectView";
import {Container, Row} from "react-bootstrap";

// images
import image1 from "./images/carousel/1.jpg"
import image2 from "./images/carousel/2.jpg"
import image3 from "./images/carousel/3.jpg"

function Projects() {
    return (
      <div>
        <MyNav/>
        <br/><br/><br/><br/>
        <h1 className="project-title">Projects</h1>
          <Container fluid className="project-container">
            <Row md={2} noGutters={true}>        
              <ProjectView imgMain={image1} name="project 1" img1={image1} img2={image2}/>
              <ProjectView imgMain={image2} name="project 2" img1={image2} img2={image3}/>
              <ProjectView imgMain={image3} name="project 3" img1={image3} img2={image1}/>
              <ProjectView imgMain={image1} name="project 4" img1={image1} img2={image2}/>
            </Row>
          </Container>
      </div>
    );
  }
  
  export default Projects;