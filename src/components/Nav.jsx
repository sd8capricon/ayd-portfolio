import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    const navStyle= {
        color: "white",
        textDecoration: "none"
    }
    return(
        <nav>
            <h3><Link style={navStyle} to="/">Logo</Link></h3>
            <ul className="nav-links">
                <Link className="nav-item" style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link className="nav-item" style={navStyle}  to="/about">
                    <li>About</li>
                </Link>
                <Link className="nav-item" style={navStyle} to="/projects">
                    <li>Projects</li>
                </Link>
                <Link className="nav-item" style={navStyle} to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;