import React from "react"
import {
  Section,
  Container,
  Title,
  Content,
  Columns,
  Column,
  Card,
  CardHeaderTitle,
} from "bloomer"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { toKebabCase } from "../utils/toKebabCase"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { CardHeader } from "bloomer/lib/components/Card/Header/CardHeader"

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
      <Section className="has-background-white">
        <Container>
          <Columns>
            <Column isSize="1/2">
              <Title>Organization directory</Title>
              <Content>
                <p>
                  We are a proud coalition of progressive organizations across
                  Canada working together for this common cause.
                </p>
                <p>
                  At this time, {query.totalCount} organizations are involved.
                </p>

                {query.organizationsGroupedByProvince.map(
                  ({ provinceName, organizations }) => {
                    return (
                      <OrganizationsByProvince
                        provinceName={provinceName}
                        organizations={organizations}
                      />
                    )
                  }
                )}
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default OrganizationsPage

function OrganizationsByProvince({ provinceName, organizations }) {
  return (
    <section style={{ padding: 16 }}>
      <Title isSize={5} style={{ marginBottom: 8 }}>
        <Link to={`/provinces/${toKebabCase(provinceName)}`}>
          {provinceName}
        </Link>
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

function OrganizationsByCity({ city, organizations }) {
  return (
    <section style={{ padding: 16 }}>
      <Title isSize={5} style={{ marginBottom: 8 }}>
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
