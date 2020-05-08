import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import { Title } from "../components/ds/typography"

const ContentPage = ({ pageContext }) => {
  const { title, _rawContent } = pageContext.page
  console.warn(_rawContent)
  return (
    <Layout>
      <SEO title={title} />
      <section className="container py-8">
        <div className="max-w-md">
          {_rawContent.map(({ heading, text }) => (
            <>
              <Title>{heading}</Title>
              <PortableText blocks={text} />
            </>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default ContentPage
