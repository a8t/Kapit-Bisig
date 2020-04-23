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
            name
            province {
              name
            }
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
  console.log(cities)
  return (
    <Layout>
      <SEO title="Request | Kapit-Bisig Canada" />
      <Section className="has-background-white">
        <Container>
          <Title>Help request</Title>
          <Content>
            Select your city to request help. More are coming soon.
          </Content>
          {cities.nodes.map(city => {
            return (
              <CityCard
                name={city.name}
                provinceName={city.province.name}
                cityLogoAssetFluid={city.cityLogo?.asset.fluid}
                link={city.requestForm}
              />
            )
          })}
        </Container>
      </Section>
    </Layout>
  )
}
export default RequestPage
