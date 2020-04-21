import React from "react"
import { Section, Container, Title, Content } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"

const RequestPage = () => {
  const { cities } = useStaticQuery(
    graphql`
      query RequestPageQuery {
        cities: allSanityCity {
          nodes {
            city
            province
            form: requestForm
            cityLogo {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Request | Kapit-Bisig Canada" />
      <Section className="has-background-white">
        <Container>
          <Title>Help request</Title>
          <Content>
            Select your city to request help. More are coming soon.
          </Content>
          <div style={{ display: "flex" }}>
            {cities.nodes.map(city => {
              return <CityCard city={city} />
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
export default RequestPage
