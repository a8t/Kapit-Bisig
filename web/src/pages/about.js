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
            <Title isSpaced>Who are we?</Title>

            <Content>
              <p>
                We are a group of Filipinos, allies, and concerned community
                members. We are women, youth, students, migrants, workers,
                professionals, and church people.{" "}
                <b>We knew that we would have to come together</b> to weather
                the storm of the COVID-19 pandemic.
              </p>
              <p>
                Kapit-Bisig Laban COVID is an effort initiated by BAYAN Canada
                in Toronto (including member organizations Migrante Ontario,
                Anakbayan Toronto, and GABRIELA Ontario) and Toronto Committee
                for Human Rights in the Philippines (TCHRP).
              </p>

              <p>
                These organizations support the democratic people's movement in
                the Philippines. We connect the struggles of the Filipino people
                back home to the struggles of migrant and diasporic Filipinos
                overseas.
              </p>
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

export default About
