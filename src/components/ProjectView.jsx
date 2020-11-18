import React from "react";
import Col from 'react-bootstrap/Col'

function ProjectView(props){
    return(
        <Col data-aos="zoom-in-up" data-aos-duration="1000">
            <div>
                <img className="project-img" src={props.img} alt="project"/>
            </div>
            <h4 className="project-sub">{props.name}</h4>
        </Col>
    );
}

export default ProjectView;