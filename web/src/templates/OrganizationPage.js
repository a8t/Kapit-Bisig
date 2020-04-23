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
import { SocialLink } from "../components/OrganizationCard"
import { toKebabCase } from "../utils/toKebabCase"

const OrganizationPage = ({ pageContext }) => {
  const {
    name,
    _rawContent,
    province,
    cities,
    email,
    facebook,
    instagram,
    twitter,
    website,
    phone,
  } = pageContext
  console.warn(pageContext)
  return (
    <Layout>
      <SEO title={`${name} | Kapit-Bisig Canada`} />
      <Section className="has-background-white">
        <Container>
          <Columns>
            <Column isSize="2/3">
              {/* Page title */}

              <p>
                <Link to={`/provinces/${toKebabCase(province.name)}`}>
                  {province.name}
                </Link>
              </p>
              <Title isSize={1}>{name}</Title>
              <Content>
                {_rawContent &&
                  _rawContent.map(({ heading, text }) => (
                    <>
                      <Title isSpaced>{heading}</Title>
                      <PortableText blocks={text} />
                    </>
                  ))}

                {Object.entries({
                  website,
                  phone,
                  twitter,
                  instagram,
                  facebook,
                  email,
                }).map(([type, value]) => (
                  <SocialLink type={type} value={value} />
                ))}
              </Content>
            </Column>
          </Columns>
        </Container>
      </Section>
    </Layout>
  )
}

export default OrganizationPage
