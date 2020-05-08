import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact"
import PageContainer from "../components/ds/PageContainer"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <PageContainer>
      <div className="max-w-md">
        <ContactForm />
      </div>
    </PageContainer>
  </Layout>
)

export default ContactPage
