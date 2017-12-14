import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <Link to="/">Air Quality</Link>
            <Link to="/add-quality">Add a Quality</Link>
        </nav>
    )
}
