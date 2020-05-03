import React, { useState } from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import CallToAction from "./callToAction"

const navBarClassName = `
  py-3
  sm:py-4
  px-2
  md:px-4
  font-semibold
  bg-transparent
  dark-mode:bg-transparent
  dark-mode:hover:bg-gray-600
  dark-mode:focus:bg-gray-600
  dark-mode:focus:text-white
  dark-mode:hover:text-white
  dark-mode:text-gray-200
  hover:text-gray-100
  hover:bg-blue-700
  focus:text-white
  focus:bg-blue-900
  focus:outline-none
  focus:shadow-outline
`

const NavbarLink = props => {
  return (
    <Link
      activeClassName="text-white bg-blue-700"
      className={navBarClassName}
      {...props}
    />
  )
}

const CustomNavbar: React.FC<{ siteTitle: string }> = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const { icon } = useStaticQuery(
    graphql`
      query {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 900
              traceSVG: {
                color: "rgba(0,0,0,0)"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <div className="antialiased bg-blue-500 text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="flex flex-col md:items-center justify-between sm:flex-row container">
        <div className="flex flex-row p-x-4 items-center justify-between ">
          <Link
            to="/"
            className="text-lg font-light tracking-widest rounded-lg dark-mode:text-white focus:outline-none flex items-center space-x-2"
          >
            <Img
              fluid={icon.childImageSharp.fluid}
              style={{
                width: 32,
              }}
              alt="Kapit-Bisig Logo"
            />
            <p className="font-display">Kapit-Bisig Canada</p>
          </Link>
          <button
            className="rounded-lg ml-auto sm:hidden focus:outline-none focus:shadow-outline py-4"
            onClick={toggleCollapse}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              ) : (
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col flex-grow ${
            isOpen ? "flex" : "hidden"
          } p-x-4 sm:pb-x-0 sm:flex sm:justify-end sm:flex-row sm:items-center space-x-0 md:space-x-4 text-sm md:text-base`}
        >
          <NavbarLink to="/about">About</NavbarLink>

          <NavbarLink to="/contact">Contact</NavbarLink>
          <NavbarLink to="/hotline">Hotline</NavbarLink>
          {/* <Link
                        to="/resources"

                        className="navbar-link nav-item is-arrowless"
                      >
                        Resources
                      </Link> */}
          <div className="py-2 sm:py-0 sm:pl-2">
            <CallToAction />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default CustomNavbar
