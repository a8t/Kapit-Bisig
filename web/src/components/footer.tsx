import React from "react"
import { Footer, Container, Content, Icon } from "bloomer"
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
  console.warn(JSON.stringify(site._rawFooterText, null, 4))
  return (
    <footer className="bg-gray-200 py-12">
      <div className="container">
        <p className="text-gray-700 max-w-lg">
          <PortableText blocks={site._rawFooterText} />
        </p>

        <Content isSize="small">
          <nav className="grid gap-3 my-4">
            <Link to="/about">About</Link>
            <Link to="/cities">Cities</Link>
            <Link to="/organizations">Organizations</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </Content>

        <Content isSize="small">
          <p>© {new Date().getFullYear()}</p>
        </Content>
      </div>
    </footer>
  )
}

export default MainFooter
