/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { library, config } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

config.autoAddCss = false
library.add(fab, fas)

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import MainFooter from "./footer"
import Navbar from "./navbar"

const Layout = ({ children, className = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site: sanitySiteConfig {
        title
      }
    }
  `)

  return (
    <div className={"min-h-screen flex flex-col " + className}>
      <Navbar siteTitle={data.site.title} />
      <main className="flex-grow">{children}</main>
      <MainFooter />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
