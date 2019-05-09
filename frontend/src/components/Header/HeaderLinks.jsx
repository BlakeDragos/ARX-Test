import React, { Component } from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import { Link } from 'react-router-dom'

class HeaderLinks extends Component {
  render() {
    return (
        <Nav variant="tabs" defaultActiveKey="/home">
          <NavItem>
          <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={Link} to="/user">Profile</NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={Link} to="/table">Sessions</NavLink>
          </NavItem>
        </Nav>
    );
  }
}

export default HeaderLinks;
