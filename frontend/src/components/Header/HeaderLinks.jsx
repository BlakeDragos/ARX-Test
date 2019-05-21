import React, { Component } from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import { Link } from 'react-router-dom';
import "../../assets/css/signout.css";

class HeaderLinks extends Component {
  handleClick(){
    sessionStorage.clear();
  }
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
          <NavItem>
          <NavLink tag={Link} to="/" onClick={this.handleClick}>Sign Out</NavLink>
          </NavItem>
        </Nav>
    );
  }
}

export default HeaderLinks;
