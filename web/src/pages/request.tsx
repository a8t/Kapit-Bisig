import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CityCard from "../components/CityCard"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"

const RequestPage = () => {
  const { cities } = useStaticQuery(
    graphql`
      query RequestPageQuery {
        cities: allSanityCity {
          citiesGroupedByProvince: group(field: province___name) {
            provinceName: fieldValue
            cities: nodes {
              name
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
      }
    `
  )

  return (
    <Layout>
      <SEO title="Request | Kapit-Bisig Canada" />
      <section className="container py-8">
        <Title>Help Request</Title>
        <Paragraph>
          Select your city to request help. More are coming soon.
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
                      link={city.requestForm}
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
export default RequestPage
