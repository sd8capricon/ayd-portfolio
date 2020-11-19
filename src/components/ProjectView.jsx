import React, {useState} from "react";
import {Col, Modal, Carousel, Button} from 'react-bootstrap';

function ProjectView(props){

    const [isHover,setHover]=useState(false);
    const [show, setShow] = useState(false);

    function handleMouseOver(){
        setHover(true);
    }
    function handleMouseOut(){
        setHover(false);
    }
    function handleOpen(){
        setShow(true);
    }
    function handleClose(){
        setShow(false);
    }

    return(
        <>
        <Col  data-aos="zoom-in-up" data-aos-duration="1000">
            <button className="project-button" onClick={handleOpen}>
                <div
                    onMouseOver={handleMouseOver} 
                    onMouseLeave={handleMouseOut}
                    >
                    <img 
                        className="project-img"
                        src={props.imgMain} 
                        alt="project"
                        style={isHover? {opacity:"0.5"} :{opacity:"1"}}
                    />
                    <h2 
                        className="project-sub"
                        style={isHover? {opacity:"1", color:"black"} :{opacity:"0"}}>
                            {props.name}
                    </h2>
                </div>
            </button>
        </Col>
            <Modal size="xl" centered show={show} onHide={handleClose}>
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title><h1>{props.name}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.img1}
                                alt="1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={props.img2}
                                alt="2"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
                <Modal.Footer>
                    <h2 className="mr-auto">Info</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra quis lectus non lobortis. In hac habitasse platea dictumst. Quisque eu eros laoreet nulla eleifend lacinia. Nam consectetur hendrerit sem, ac ornare elit gravida sed. In lacinia sapien turpis, eget porta quam auctor vel. Integer lectus elit, tempor et erat quis, ornare congue dui. Morbi at neque vel risus varius commodo. Mauris in auctor eros. Vestibulum at turpis ac neque molestie imperdiet. In hac habitasse platea dictumst. Nunc tincidunt justo mattis, placerat mauris id, sodales libero. Duis leo felis, vulputate id ante et, hendrerit accumsan elit
                    </p>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectView;