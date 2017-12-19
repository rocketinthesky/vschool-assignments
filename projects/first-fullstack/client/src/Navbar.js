import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/add">Add Entry</a>
      <a href="/entries">View Entries</a>
    </nav>
  )
}
