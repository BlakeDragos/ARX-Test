import React, { Component } from "react";
import { NavItem, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'

class HeaderLinks extends Component {
  render() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
          <NavItem>
          <Nav.Link><Link  to="/dashboard">Dashboard</Link></Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link><Link  to="/user">Profile</Link></Nav.Link>
          </NavItem>
          <NavItem>
          <Nav.Link><Link  to="/table">Sessions</Link></Nav.Link>
          </NavItem>
        </Nav>
    );
  }
}

export default HeaderLinks;
