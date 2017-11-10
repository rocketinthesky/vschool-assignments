import React from "react";
import {Navbar, Nav, MenuItem, NavDropdown, NavItem,} from "react-bootstrap";

function NavBar(){
  const styles = {
    backgroundColor: `#ffdfba`,
    textAlign: `center`
  };

  return(
    <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Home</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
      <NavItem eventKey={1} href="#">About</NavItem>
      <NavItem eventKey={2} href="#">Products</NavItem>
    </Nav>
  </Navbar>
  )
}

export default NavBar;
