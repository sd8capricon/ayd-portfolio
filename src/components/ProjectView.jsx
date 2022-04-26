import { useEffect, useMemo, useState } from "react";
import { Col, Modal, Carousel } from "react-bootstrap";

function ProjectView(props) {
  const [isHover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  let [project, setProject] = useState();
  let [projectImgs, setProjectImgs] = useState([]);

  function handleMouseOver() {
    setHover(true);
  }
  function handleMouseOut() {
    setHover(false);
  }
  function handleOpen() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  /*
    Prop Structure
        project:{
            id:,
            name:,
            client:,
            address:,
            area:,
            previewImg:,
            imgs:[]
        }
    */

  useEffect(() => {
    setProject(props.project);
    console.log(props.imgs);
    setProjectImgs(props.imgs);
  }, []);

  if (projectImgs.length !== 0) {
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
                src={props.imgMain}
                alt="project"
                // style={isHover ? { opacity: "0.5" } : { opacity: "1" }}
              />
              <h3 className="project-sub">{props.name}</h3>
            </div>
          </button>
        </Col>
        <Modal size="xl" centered show={show} onHide={handleClose}>
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title>
              <h2>{props.name}</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Carousel indicators={false} pause={false}>
              {projectImgs.forEach((img) => {
                console.log(img);
                return (
                  <Carousel.Item interval={3000}>
                    <img className="d-block w-100" src={img} />
                  </Carousel.Item>
                );
              })}
              {/* <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img1}
                                alt="1"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img2 ? props.img2 : props.img1}
                                alt="2"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img3 ? props.img3 : props.img1}
                                alt="3"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img4 ? props.img4 : props.img2}
                                alt="4"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img5 ? props.img5 : props.img1}
                                alt="5"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img6 ? props.img7 : props.img2}
                                alt="6"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img7 ? props.img7 : props.img3}
                                alt="7"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img8 ? props.img8 : props.img1}
                                alt="8"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img9 ? props.img9 : props.img2}
                                alt="9"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={props.img10 ? props.img10 : props.img3}
                                alt="10"
                            />
                        </Carousel.Item> */}
            </Carousel>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <h4 className="mr-auto">Info</h4>
            <div>
              <ul>
                <li>
                  <strong>client</strong>: {props.client}
                </li>
                <li>
                  <strong>Location</strong>: {props.address}
                </li>
                <li>
                  <strong>Area</strong>: {props.area}
                </li>
              </ul>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProjectView;
