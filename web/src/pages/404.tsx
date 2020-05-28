import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title } from "../components/ds/typography"
import { PageContainer } from "../components/ds"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContainer>
      <Title>NOT FOUND</Title>
      <p className="mb-2">This page doesn&#39;t exist. Sorry about that!</p>
      <Link to="/">
        <FontAwesomeIcon icon="arrow-left" className="mr-2" />
        <span>Go back to the homepage</span>
      </Link>
    </PageContainer>
  </Layout>
)

export default NotFoundPage
