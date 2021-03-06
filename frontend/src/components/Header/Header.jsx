import React, { Component } from "react";
import { Navbar, Nav, NavbarBrand, NavbarToggler } from "reactstrap";

import HeaderLinks from "./HeaderLinks";

import dashboardRoutes from "../../routes/dashboard";
import "../../assets/css/signout.css"
class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  getBrand() {
    var name;
    dashboardRoutes.map((prop, key) => {
      if (prop.collapse) {
        prop.views.map((prop, key) => {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
          return null;
        });
      } else {
        if (prop.redirect) {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        } else {
          if (prop.path === this.props.location.pathname) {
            name = prop.name;
          }
        }
      }
      return null;
    });
    return name;
  }
  render() {
    return (
      <Navbar>
          <NavbarBrand>
            <h3 href="#fill">{this.getBrand()}</h3>
          </NavbarBrand>
          <NavbarToggler className="toggler" onClick={this.mobileSidebarToggle} />
          <Nav className="screensize">
          <HeaderLinks />
          </Nav>
      </Navbar>
    );
  }
}

export default Header;
