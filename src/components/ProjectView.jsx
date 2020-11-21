import React, {useState} from "react";
import {Col, Modal, Carousel} from 'react-bootstrap';

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
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
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
                    <Modal.Title><h2>{props.name}</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <Carousel pause={false}>
                        <Carousel.Item interval={3000}>
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
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <h2 className="mr-auto">Info</h2>
                    <div>
                        <ul>
                            <li><strong>client</strong>: {props.client}</li>
                            <li><strong>Location</strong>: {props.address}</li>
                            <li><strong>Area</strong>: {props.area}</li>
                        </ul>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ProjectView;