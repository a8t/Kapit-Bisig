import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import {
  Container,
  Title,
  Column,
  Content,
  Button,
  Icon,
  Card,
  CardHeader,
  CardContent,
  Columns,
  CardHeaderTitle,
  Section,
} from "bloomer"

import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture,
} from "../lib/helpers"
import Layout from "../components/layout"
import GraphQLErrorList from "../components/graphql-error-list"

import SEO from "../components/seo"
import Hero from "../components/hero"
import { RequestAid, Volunteer } from "../components/callToAction"
import ContactForm from "../components/contact"

export const query = graphql`
  fragment SanityImage on SanityImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteConfig {
      title
      subtitle
      url
      frontpage {
        id
      }
    }
  }
`

const SectionWithSpacing = props => {
  return <section style={{ paddingTop: 32, paddingBottom: 32 }} {...props} />
}

const IndexPage = ({ data }) => {
  const { site } = data

  return (
    <Layout>
      <SEO title="Kapit-Bisig" />
      <Hero siteTitle={site.title} subtitle={site.subtitle} />
      <Section>
        <Container>
          <Title>How does it work?</Title>

          <Columns>
            <Column isSize="1/2">
              <p>
                To sign up for the Kapit-Bisig COVID Response mutual aid
                network, you can fill out one of the two forms below.
              </p>
            </Column>
          </Columns>

          <Columns>
            <Column isSize="1/2">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>I need help</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    I'm going through some hard times. I'm struggling
                    financially, emotionally, or physically. I'm facing loss of
                    work or other hardship.
                    <div style={{ marginTop: 16 }}></div>
                    <RequestAid isColor="primary" />
                  </Content>
                </CardContent>
              </Card>
            </Column>
            <Column isSize="1/2">
              <Card>
                <CardHeader>
                  <CardHeaderTitle>I want to help</CardHeaderTitle>
                </CardHeader>
                <CardContent>
                  <Content>
                    I have additional means. I can offer time, resources,
                    skills, or knowledge. I want to give back to my community.
                    <div style={{ marginTop: 16 }}></div>
                    <Volunteer isColor="primary" />
                  </Content>
                </CardContent>
              </Card>
            </Column>
          </Columns>
          <Columns>
            <Column isSize="1/2">
              <Content>
                <SectionWithSpacing>
                  <h3>Who are we?</h3>
                  <p>
                    We are a group of Filipinos, allies, and concerned community
                    members. We are women, youth, students, migrants, workers,
                    professionals, and church people.{" "}
                    <b>We knew that we would have to come together</b> to
                    weather the storm of the COVID-19 pandemic.
                  </p>
                  <Link to="/about">
                    <Button isOutlined className="is-rounded" id="is-spaced">
                      <span>Learn more</span>
                      <Icon className="fa fa-arrow-right fa-sm" />
                    </Button>
                  </Link>
                </SectionWithSpacing>

                <SectionWithSpacing>
                  <h3>Contact us</h3>
                  <p>
                    If you have questions or concerns, please fill out the form
                    on our
                    <Link to="/contact"> Contact page</Link>.
                  </p>
                  <p>
                    If you need help urgently, please{" "}
                    <Link to="hotline">call our hotline</Link>.
                  </p>
                </SectionWithSpacing>
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default IndexPage
