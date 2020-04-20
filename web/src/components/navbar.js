import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarEnd,
  NavbarMenu,
  NavbarItem,
  Container,
  Icon,
  Button,
} from "bloomer"
import CallToAction from "./callToAction"

export default class navbar extends Component {
  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
  }
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <Navbar>
        <Container>
          {/* Site title link */}
          <NavbarBrand>
            <Link to="/" className="navbar-item">
              {this.props.siteTitle}
            </Link>
            <NavbarBurger
              isActive={this.state.isOpen}
              onClick={this.toggleCollapse}
            />
          </NavbarBrand>
          <NavbarMenu
            isActive={this.state.isOpen}
            onClick={this.toggleCollapse}
          >
            {/* Page nav links */}
            <NavbarEnd>
              <Link
                to="/"
                className="navbar-link nav-item is-arrowless"
                activeClassName="is-active"
              >
                Home
              </Link>
              <Link
                to="/about"
                activeClassName="is-active"
                className="navbar-link nav-item is-arrowless"
              >
                About
              </Link>
              <Link
                to="/contact"
                activeClassName="is-active"
                className="navbar-link nav-item is-arrowless"
              >
                Contact
              </Link>
              <Link
                to="/hotline"
                activeClassName="is-active"
                className="navbar-link nav-item is-arrowless"
              >
                Hotline
              </Link>
              {/* <Link
                to="/resources"
                activeClassName="is-active"
                className="navbar-link nav-item is-arrowless"
              >
                Resources
              </Link> */}
              {/* Github download button */}
              <NavbarItem>
                <CallToAction />
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}
