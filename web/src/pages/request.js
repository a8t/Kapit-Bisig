import React from "react"
import {
  Section,
  Container,
  Title,
  Card,
  CardImage,
  CardHeader,
  CardHeaderTitle,
  Content,
} from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const cities = [
  {
    name: "Toronto, Ontario",
    link: "https://bit.ly/kapitbisigto-needs",
    imageName: "toronto",
  },
]

const About = () => (
  <Layout>
    <SEO title="Request Help | Kapit-Bisig Canada" />
    <Section className="has-background-white">
      <Container>
        <Title>Help Request</Title>
        <Content>
          Select your city to request help. More are coming soon.
        </Content>
        <div style={{ display: "flex" }}>
          {cities.map(city => {
            return <CityCard city={city} />
          })}
        </div>
      </Container>
    </Section>
  </Layout>
)

const CityCard = ({ city }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: allFile {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )

  const { childImageSharp } = image.nodes.find(({ relativePath }) =>
    relativePath.includes(city.imageName)
  )
  return (
    <a href={city.link}>
      <Card
        style={{
          width: 192,
        }}
      >
        <CardHeader>
          <CardHeaderTitle>{city.name}</CardHeaderTitle>
        </CardHeader>
        <CardImage>
          <Img fluid={childImageSharp.fluid}></Img>
        </CardImage>
      </Card>
    </a>
  )
}
export default About
