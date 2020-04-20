import React from "react"
import { Footer, Container, Content, Icon } from "bloomer"

const MainFooter = () => {
  return (
    <Footer>
      <Container>
        {/* Built by ZLI */}
        <Content>
          <p>
            Kapit-Bisig Laban COVID is a project of{" "}
            <a
              href="https://www.facebook.com/BAYANCanada/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BAYAN Canada
            </a>
            .
          </p>
        </Content>
        {/* Built with Gatsby, Bulma, and Bloomer */}
        <Content isSize="small">
          <p>© {new Date().getFullYear()}</p>
        </Content>
      </Container>
    </Footer>
  )
}

export default MainFooter
