import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";

class HeaderLinks extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-end" variant="tabs" defaultActiveKey="/home">
          <NavItem>
          <Nav.Link href="/home">Dashboard</Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
