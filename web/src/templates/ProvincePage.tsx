import React from "react"
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

import { toKebabCase } from "../utils/toKebabCase"
import Link from "../components/Link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"
import PortableText from "../components/portableText"

const ProvincePage = ({ pageContext }) => {
  const { name, cities } = pageContext

  return (
    <Layout>
      <SEO title={`${name} | Kapit-Bisig Canada`} />
      <Section className="has-background-white">
        <Container>
          <Columns>
            <Column isSize="1/2">
              {/* Page title */}
              <Title>{name}</Title>
              <Subtitle>
                In {name}, we have Kapit-Bisig networks set up in{" "}
                {cities.length} {cities.length > 0 ? "cities" : "city"}.
              </Subtitle>
              <Content>
                {cities.map(city => (
                  <p>
                    <Link to={`/cities/${toKebabCase(city.name)}`}>
                      {city.name}
                    </Link>
                  </p>
                ))}
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default ProvincePage
