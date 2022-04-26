import React from "react";
import MyNav from "./components/Nav";
import ProjectView from "./components/ProjectView";
import Footer from "./components/Footer";
import { Container, Row } from "react-bootstrap";
import projectList from "./ProjectsList";

function Projects() {
  function createProject(project) {
    return (
      <ProjectView
        key={project.id}
        project={{
          id: project.id,
          name: project.name,
          client: project.client,
          address: project.address,
          area: project.area,
          previewImg: project.imgMain
        }}
        imgs={[project.img1, project.img2, project.img3]}
      />
    );
  }

  return (
    <div>
      <MyNav />
      <br /><br /><br />
      <Container fluid className="project-container">
        <Row md={2} noGutters={true}>
          <>{projectList.map(createProject)}</>
        </Row>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Projects;