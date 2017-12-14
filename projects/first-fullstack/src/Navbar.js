import React from "react";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/">Add Entry</a>
      <a href="/">View Entries</a>
      <a href="/">View Map</a>
    </nav>
  )
}
