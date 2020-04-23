import React from "react"
import { Section, Container, Title, Content, Subtitle } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { toKebabCase } from "../utils/toKebabCase"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"

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
          <Content>
            Our local networks are set up on the city level. Please check each
            city page for more information.
          </Content>
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
