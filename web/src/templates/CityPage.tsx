import React from "react"
import { Link } from "gatsby"
import {
  Section,
  Container,
  Title,
  Subtitle,
  Button,
  Icon,
  Column,
  Columns,
  Content,
} from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"
import PortableText from "../components/portableText"
import OrganizationCard from "../components/OrganizationCard"

const CityPage = ({ pageContext }) => {
  console.warn(pageContext)
  const {
    name,
    province: { name: provinceName },
    requestForm,
    volunteerForm,
    organizations,
  } = pageContext

  console.warn(organizations)

  return (
    <Layout>
      <SEO title={`${name} | Kapit-Bisig Canada`} />
      <Section className="has-background-white">
        <Container>
          <Columns>
            <Column isSize="1/2">
              {/* Page title */}
              <Title>
                {name}, {provinceName}
              </Title>
              <Content>
                {/* {_rawContent.map(({ heading, text }) => (
                  <>
                    <Title isSpaced>{heading}</Title>
                    <PortableText blocks={text} />
                  </>
                ))} */}
                {organizations.map(organization => (
                  <OrganizationCard
                    name={organization.name}
                    cityNames={organization.cities.map(({ name }) => name)}
                    provinceName={organization.province.name}
                    email={organization.email}
                    twitter={organization.twitter}
                    facebook={organization.facebook}
                    phone={organization.phone}
                    website={organization.website}
                    instagram={organization.instagram}
                  />
                ))}
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default CityPage
