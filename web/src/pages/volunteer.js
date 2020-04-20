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
    link: "https://bit.ly/kapitbisigto-volunteer",
    imageName: "toronto",
  },
]

const About = () => (
  <Layout>
    <SEO title="Volunteer | Kapit-Bisig Canada" />
    <Section className="has-background-white">
      <Container>
        <Title>Volunteer registration</Title>
        <Content>
          Select the city closest to you to register. More are coming soon.
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
