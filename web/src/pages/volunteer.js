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
      query VolunteerPageQuery {
        cities: allSanityCity {
          nodes {
            name
            province {
              name
            }
            volunteerForm
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
      <SEO title="Volunteer | Kapit-Bisig Canada" />
      <Section className="has-background-white">
        <Container>
          <Title>Volunteer registration</Title>
          <Content>
            Select the city closest to you to register. More are coming soon.
          </Content>
          {cities.nodes.map(city => {
            return (
              <CityCard
                name={city.name}
                provinceName={city.province.name}
                cityLogoAssetFluid={city.cityLogo?.asset.fluid}
                link={city.volunteerForm}
              />
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}
export default VolunteerPage
