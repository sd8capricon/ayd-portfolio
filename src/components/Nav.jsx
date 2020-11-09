import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { useState } from "react";

function Nav(props){
    const forLink= {
        color: "white",
        textDecoration: "none"
    }
    const [hover, setHover] = useState(false);
    function setColor(){
        setHover(true);
    }
    function removeColor(){
        setHover(false);
    }
    return(
        <nav onMouseOver={setColor} style={hover? {backgroundColor: "black"}: {backgroundColor: props.color}}  onMouseLeave={removeColor} >
            <h3><Link style={forLink} to="/"><a>Logo</a></Link></h3>
            <ul className="nav-links">
                <Link className="nav-item" style={forLink} to="/">
                    <li>Home</li>
                </Link>
                <Link className="nav-item" style={forLink} to="/about">
                    <li>About</li>
                </Link>
                <Link className="nav-item" style={forLink} to="/projects">
                    <li>Projects</li>
                </Link>
                <Link className="nav-item" style={forLink} to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;

// 