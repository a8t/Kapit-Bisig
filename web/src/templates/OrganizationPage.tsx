import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import { SocialLink } from "../components/OrganizationCard"
import { PageContainer, Title } from "../components/ds"

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
  return (
    <Layout>
      <SEO title={`${name} | Kapit-Bisig Canada`} />
      <PageContainer>
        {/* Page title */}

        <Title>{name}</Title>
        {_rawContent &&
          _rawContent.map(({ heading, text }) => (
            <>
              <Title>{heading}</Title>
              <PortableText blocks={text} />
            </>
          ))}

        <div className="space-y-2">
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
        </div>
      </PageContainer>
    </Layout>
  )
}

export default OrganizationPage
