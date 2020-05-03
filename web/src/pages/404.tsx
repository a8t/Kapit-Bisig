import React from "react"
import { Link } from "gatsby"
import { Icon } from "bloomer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Title } from "../components/ds/typography"
import { PageContainer } from "../components/ds"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageContainer>
      <Title>NOT FOUND</Title>
      <p className="mb-2">This page doesn&#39;t exist. Sorry about that!</p>
      <Link to="/">
        <Icon className="fa fa-arrow-left fa-sm mr-2" />
        <span>Go back to the homepage</span>
      </Link>
    </PageContainer>
  </Layout>
)

export default NotFoundPage
