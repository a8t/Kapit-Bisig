import React, { useState } from "react"
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

const CustomNavbar: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Navbar>
      <Container>
        {/* Site title link */}
        <NavbarBrand>
          <Link to="/" className="navbar-item">
            {siteTitle}
          </Link>
          <NavbarBurger isActive={isOpen} onClick={toggleCollapse} />
        </NavbarBrand>
        <NavbarMenu isActive={isOpen} onClick={toggleCollapse}>
          {/* Page nav links */}
          <NavbarEnd>
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

export default CustomNavbar
