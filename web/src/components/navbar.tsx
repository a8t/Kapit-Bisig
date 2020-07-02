import React, { useState } from "react"
import KBLogo from "../images/kapitbisig-logo.svg"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

import CallToAction, { RequestAid } from "./callToAction"

const navBarClassName = `
  text-white  
  py-3
  sm:py-4
  px-2
  md:px-4
  font-semibold
  bg-transparent
  hover:text-gray-100
  hover:bg-blue-700
  focus:bg-blue-900
  focus:outline-none
  focus:shadow-outline
`

const NavbarLink = props => {
  return (
    <Link
      activeClassName=" bg-blue-700"
      className={navBarClassName}
      getProps={({ location }) => {
        console.log(location.pathname, props.to)
        return {
          className: location.pathname.includes(props.to)
            ? "bg-blue-700 " + navBarClassName
            : navBarClassName,
        }
      }}
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
            className=" focus:outline-none flex items-center space-x-4"
          >
            <img src={KBLogo} className="w-8" />
            <p className="text-white font-semibold">Home</p>
          </Link>
          <button
            className="rounded-lg ml-auto sm:hidden focus:outline-none focus:shadow-outline py-4"
            onClick={toggleCollapse}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
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
          <NavbarLink to="/youth-survey">Youth Survey</NavbarLink>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/news">News</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
          {/* <Link
                        to="/resources"

                        className="navbar-link nav-item is-arrowless"
                      >
                        Resources
                      </Link> */}
          <div className="py-2 sm:py-0 sm:pl-2">
            <RequestAid isColor="white" />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default CustomNavbar
