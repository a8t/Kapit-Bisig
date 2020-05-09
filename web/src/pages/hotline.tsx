import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageContainer from "../components/ds/PageContainer"
import { Title, Subtitle } from "../components/ds/typography"

const HOTLINE = "+1 866-275-4046"

const HotlinePage = () => (
  <Layout>
    <SEO title="Hotline" />
    <PageContainer>
      <Title>Our 24/7 Hotline</Title>
      <div className="max-w-md space-y-4">
        <p>
          Kapit-Bisig Laban COVID is partnering with the{" "}
          <a href="https://www.migrantsresourcecentre.ca">
            Migrants Resource Centre Canada
          </a>{" "}
          to offer a 24/7, completely volunteer-operated hotline.
        </p>

        <p>
          If you have an emergency and you urgently need to get some help, you
          can contact us at:
        </p>
        <Subtitle>
          <a href={`tel:${HOTLINE}`}>{HOTLINE}</a>
        </Subtitle>
      </div>
    </PageContainer>
  </Layout>
)

export default HotlinePage
