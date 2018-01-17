import React from "react";

const NavLink = require("react-router-dom").NavLink;

export default function Navbar(props) {
  return (
    <ul className="navbar">
      <NavLink to='/'>
        <li>
          Map
        </li>
      </NavLink>
      <NavLink to='/entries'>
        <li>
          Entries
        </li>
      </NavLink>
    </ul>
  )
}
