import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { toKebabCase } from "../utils/toKebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title, Subtitle } from "../components/ds/typography"
import PageContainer from "../components/ds/PageContainer"
import { sortProvinces } from "../utils/sortProvinces"

const OrganizationsPage = ({}) => {
  const { query } = useStaticQuery(
    graphql`
      query OrganizationsPageQuery {
        query: allSanityOrganization {
          totalCount
          organizationsGroupedByProvince: group(field: province___name) {
            provinceName: fieldValue
            organizations: nodes {
              name
              cities {
                name
              }
              province {
                name
              }
              email
              facebook
              instagram
              twitter
              website
              phone
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Organizations | Kapit-Bisig Canada" />
      <PageContainer>
        <Title>Organization directory</Title>
        <p className="max-w-md">
          We are a proud coalition of progressive organizations across Canada
          working together for this common cause.
        </p>
        <p className="max-w-md mt-4">
          At this time, {query.totalCount} organizations are involved.
        </p>

        {sortProvinces(query.organizationsGroupedByProvince).map(
          ({ provinceName, organizations }) => {
            return (
              <OrganizationsByProvince
                provinceName={provinceName}
                organizations={organizations}
              />
            )
          }
        )}
      </PageContainer>
    </Layout>
  )
}

export default OrganizationsPage

function OrganizationsByProvince({ provinceName, organizations }) {
  return (
    <section className="mt-8">
      <Subtitle isSize={5} style={{ marginBottom: 8 }}>
        {provinceName}
      </Subtitle>
      <ul>
        {organizations.map(
          ({
            name,
            city,
            email,
            facebook,
            instagram,
            twitter,
            website,
            phone,
          }) => (
            <li>
              <Link to={`/organizations/${toKebabCase(name)}`}> {name}</Link>
            </li>
          )
        )}
      </ul>
    </section>
  )
}

function OrganizationsByCity({ city, organizations }) {
  return (
    <section>
      <Title>
        <Link to={`/cities/${city.toLowerCase()}`}>{city}</Link>
      </Title>
      <ul>
        {organizations.map(
          ({
            name,
            city,
            email,
            facebook,
            instagram,
            twitter,
            website,
            phone,
          }) => (
            <li>
              <Link to={`/organizations/${toKebabCase(name)}`}> {name}</Link>
            </li>
          )
        )}
      </ul>
    </section>
  )
}
