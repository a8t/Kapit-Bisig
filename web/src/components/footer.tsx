import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PortableText from "./portableText"

const MainFooter = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteConfig {
          _rawFooterText
        }
        defaultOgImage: file(relativePath: { eq: "kapitbisig-og.png" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    `
  )
  return (
    <footer className="bg-gray-200 py-12">
      <div className="container">
        <p className="text-gray-700 max-w-lg">
          <PortableText blocks={site._rawFooterText} />
        </p>

        <nav className="grid gap-3 my-4">
          <Link to="/cities">Get Involved Locally</Link>
          <Link to="/organizations">Who's Involved?</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <p className="text-sm text-gray-700">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default MainFooter
