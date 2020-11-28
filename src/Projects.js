import React from "react";
import MyNav from "./components/Nav";
import ProjectView from "./components/ProjectView";
import Footer from "./components/Footer";
import {Container, Row} from "react-bootstrap";
import projectList from "./ProjectsList";

function Projects() {
    function createProject(project){
      return(
        <ProjectView
          key={project.id}
          name={project.name}
          imgMain={project.imgMain}
          img1={project.img1}
          img2={project.img2}
          img3={project.img3}
          img4={project.img4}
          img5={project.img5}
          img6={project.img6}
          img7={project.img7}
          img8={project.img8}
          img9={project.img9}
          img10={project.img10}
          client={project.client}
          address={project.address}
          area={project.area}
        />
      );
    }

    return (
      <div>
        <MyNav/>
        <br/><br/><br/>
          <Container fluid className="project-container">
            <Row md={2} noGutters={true}>  
            <>{projectList.map(createProject)}</>
            </Row>
          </Container>
          <div className="footer">
            <Footer/>
          </div>
      </div>
    );
  }
  
  export default Projects;