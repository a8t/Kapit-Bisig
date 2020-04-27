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

const HOTLINE = "+1 866-275-4046"

const About = () => (
  <Layout>
    <SEO title="About us" />
    <Section className="has-background-white">
      <Container>
        <Columns>
          <Column isSize="1/2">
            {/* Page title */}

            <Content>
              <h1>Our 24/7 Hotline</h1>
              <p>
                Kapit-Bisig Laban COVID is partnering with the{" "}
                <a href="https://www.migrantsresourcecentre.ca">
                  Migrants Resource Centre Canada
                </a>{" "}
                to offer a 24/7, completely volunteer-operated hotline.
              </p>

              <p>
                If you have an emergency and you urgently need to get some help,
                you can contact us at <a href={`tel:${HOTLINE}`}>{HOTLINE}</a>.
              </p>
            </Content>
          </Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default About
