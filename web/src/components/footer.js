import React from "react"
import { Footer, Container, Content, Icon } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
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
    <Footer>
      <Container>
        <Content>
          <PortableText blocks={site._rawFooterText} />
        </Content>
        <Content isSize="small">
          <p>© {new Date().getFullYear()}</p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MainFooter
