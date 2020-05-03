import React from "react"
import { Section, Container, Content } from "bloomer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"

const VolunteerPage = () => {
  const { cities } = useStaticQuery(
    graphql`
      query VolunteerPageQuery {
        cities: allSanityCity {
          citiesGroupedByProvince: group(field: province___name) {
            provinceName: fieldValue
            cities: nodes {
              name
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
      }
    `
  )

  return (
    <Layout>
      <SEO title="Volunteer | Kapit-Bisig Canada" />
      <section className="container py-8">
        <Title>Volunteer registration</Title>
        <Paragraph>
          Select the city closest to you to register. More are coming soon.
        </Paragraph>

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
                <Subtitle>{provinceName}</Subtitle>
                {cities.map(city => {
                  return (
                    <CityCard
                      name={city.name}
                      provinceName={provinceName}
                      cityLogoAssetFluid={city.cityLogo?.asset.fluid}
                      link={city.volunteerForm}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}
export default VolunteerPage
