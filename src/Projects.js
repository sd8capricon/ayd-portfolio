import React from "react";
import MyNav from "./components/Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import ProjectView from "./components/ProjectView";

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
        <Container fluid gutter style={{textAlign:"center"}}>
          <Row md={2}>        
            <ProjectView img={image1} name="Project 1"/>
            <ProjectView img={image2} name="project 2"/>
            <ProjectView img={image3} name="project 3"/>
            <ProjectView img={image1} name="project 4"/>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default Projects;