import { useState } from "react";
import { Col, Modal, Carousel } from "react-bootstrap";

function ProjectView(props) {
  const [show, setShow] = useState(false);
  let [project] = useState(props.project);
  let [projectImgs] = useState(props.imgs);

  function handleOpen() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  return (
    <>
      <Col
        className="project-column"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <button className="project-button" onClick={handleOpen}>
          <div>
            <img
              className="project-img"
              src={project.previewImg}
              alt={`img-${project.key}`}
            />
            <h3 className="project-sub">{project.name}</h3>
          </div>
        </button>
      </Col>
      <Modal size="xl" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{project.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <Carousel pause={false}>
            {projectImgs.map((element, key) => {
              return (
                <Carousel.Item interval={3000} key={key}>
                  <img
                    className="d-block w-100"
                    src={element}
                    alt="project"
                    key={key}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Modal.Body>
        <Modal.Footer className="modal-footer mx-3">
          <h4 className="mr-auto">Info</h4>
          <div>
            <ul>
              <li>
                <strong>Client</strong>: {project.client}
              </li>
              <li>
                <strong>Location</strong>: {project.location}
              </li>
              <li>
                <strong>Area</strong>: {project.area}
              </li>
            </ul>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectView;
