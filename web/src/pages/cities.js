import React from "react"
import { Section, Container, Title, Content } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"

const VolunteerPage = () => {
  const { cities } = useStaticQuery(
    graphql`
      query CitiesPageQuery {
        cities: allSanityCity {
          nodes {
            city
            province
            volunteerForm
            requestForm
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
      <SEO title="Cities | Kapit-Bisig Canada" />
      <Section className="has-background-white">
        <Container>
          <Title>Cities</Title>
          <Content>
            Our local networks are set up on the city level. Please check each
            city page for more information.
          </Content>
          <div style={{ display: "flex" }}>
            {cities.nodes.map(eachCity => {
              return (
                <CityCard
                  city={eachCity}
                  link={`/cities/${eachCity.city.toLowerCase()}`}
                />
              )
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
export default VolunteerPage
