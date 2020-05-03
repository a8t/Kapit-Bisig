import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from "../components/hero"
import { RequestAid, Volunteer } from "../components/callToAction"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"

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

const Card = ({ title, children }) => {
  return (
    <div className="rounded border border-gray-300 shadow-lg">
      <Subtitle className="p-4 py-2 bg-gray-200">{title}</Subtitle>
      <Paragraph className="px-4">{children}</Paragraph>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { site } = data

  return (
    <Layout>
      <SEO title="Kapit-Bisig" />
      <Hero siteTitle={site.title} subtitle={site.subtitle} />
      <section className="container py-8">
        <Title>How does it work?</Title>

        <p className="w-1/2">
          To sign up for the Kapit-Bisig COVID Response mutual aid network, you
          can fill out one of the two forms below.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 py-8">
          <Card title="I Need Help">
            I'm going through some hard times. I'm struggling financially,
            emotionally, or physically. I'm facing loss of work or other
            hardship.
            <div style={{ marginTop: 16 }}></div>
            <RequestAid isColor="primary" />
          </Card>
          <Card title="I Want To Help">
            I have additional means. I can offer time, resources, skills, or
            knowledge. I want to give back to my community.
            <div style={{ marginTop: 16 }}></div>
            <Volunteer isColor="outline" />
          </Card>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
