import React, { Component } from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import { Link } from 'react-router-dom'

class HeaderLinks extends Component {
  render() {
    return (
        <Nav variant="tabs">
          <NavItem>
          <NavLink tag={Link} to="/app/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={Link} to="/app/user">Profile</NavLink>
          </NavItem>
          <NavItem>
          <NavLink tag={Link} to="/app/table">Sessions</NavLink>
          </NavItem>
        </Nav>
    );
  }
}

export default HeaderLinks;
