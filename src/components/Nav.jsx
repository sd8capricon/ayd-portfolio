import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar, Nav} from "react-bootstrap"
import "../App.css"

function MyNav(props){
    const [hover, setHover] = useState(false);
    function setColor(){
        setHover(true);
    }
    function removeColor(){
        setHover(false);
    }
    return(
            <Navbar
            variant="dark"
            onMouseOver={setColor} 
            style={hover? {backgroundColor: "black"}: {backgroundColor: props.color}}  
            onMouseLeave={removeColor}
            className="nav"
            expand="lg">
                <Navbar.Brand href="/" className="nav-c-brand">Architect Yogesh Dhaigude</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-links" href="/">Home</Nav.Link>
                        <Nav.Link className="nav-links" href="/about">About</Nav.Link>
                        <Nav.Link className="nav-links" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="nav-links" href="/contact">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default MyNav;


