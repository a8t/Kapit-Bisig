import React from "react"
import { Link } from "gatsby"
import { Title, Section, Container, Button, Icon, Content } from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container>
        <Title>NOT FOUND</Title>
        <p>This page doesn&#39;t exist. Sorry about that!</p>
        <Link to="/">
          <Button
            isColor="primary"
            className="is-rounded"
            id="is-spaced"
            style={{ marginTop: 32 }}
          >
            <Icon className="fa fa-arrow-left fa-sm" />
            <span>Go back to the homepage</span>
          </Button>
        </Link>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
