import React from "react"
import { Section, Container, Content, Subtitle } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { toKebabCase } from "../utils/toKebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"

const CitiesPage = () => {
  const { cities } = useStaticQuery(
    graphql`
      query CitiesPageQuery {
        cities: allSanityCity {
          citiesGroupedByProvince: group(field: province___name) {
            provinceName: fieldValue
            cities: nodes {
              name
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
      }
    `
  )

  return (
    <Layout>
      <SEO title="Cities | Kapit-Bisig Canada" />
      <Section className="has-background-white">
        <Container>
          <Title>Cities</Title>
                 <Paragraph>Please click on your city to find local support.</Paragraph>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {cities.citiesGroupedByProvince.map(({ provinceName, cities }) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: 32,
                  }}
                >
                  <Subtitle isSize={5} isMarginless>
                    {provinceName}
                  </Subtitle>
                  {cities.map(city => {
                    return (
                      <CityCard
                        name={city.name}
                        provinceName={provinceName}
                        cityLogoAssetFluid={city.cityLogo?.asset.fluid}
                        link={`/cities/${toKebabCase(city.name)}`}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </Layout>
  )
}
export default CitiesPage
