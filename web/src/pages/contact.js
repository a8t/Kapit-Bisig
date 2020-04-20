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

const About = () => (
  <Layout>
    <SEO title="About us" />
    <Section className="has-background-white">
      <Container>
        <Columns>
          <Column isSize="1/2">
            {/* Page title */}

            <Content>
              <ContactForm />
            </Content>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default About
