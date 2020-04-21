import React from "react"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Icon,
  Column,
  Columns,
  Content,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"
import PortableText from "../components/portableText"

const CityPage = ({ pageContext }) => {
  const { city, province, requestForm, volunteerForm } = pageContext

  return (
    <Layout>
      <SEO title={`${city} | Kapit-Bisig Canada`} />
      <Section className="has-background-white">
        <Container>
          <Columns>
            <Column isSize="1/2">
              {/* Page title */}
              <Title>
                {city}, {province}
              </Title>
              <Content>
                {/* {_rawContent.map(({ heading, text }) => (
                  <>
                    <Title isSpaced>{heading}</Title>
                    <PortableText blocks={text} />
                  </>
                ))} */}
              </Content>

              {/* Back to homepage button */}
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
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default CityPage
