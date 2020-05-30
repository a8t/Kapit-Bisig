import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import { Title, Subtitle, Paragraph } from "../components/ds/typography"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PageContainer } from "../components/ds"
import Link from "../components/Link"
import RecentArticle from "../components/news/RecentArticle"

const CategoryPage = ({ pageContext }) => {
  const { title, slug, posts } = pageContext

  const postArray = posts ?? []

  return (
    <Layout>
      <SEO title={title} />

      <PageContainer>
        <span>
          <Link to="/news">News > Categories</Link> >
        </span>
        <Title>
          <span className="text-5xl">{title}</span>
        </Title>

        <Paragraph>
          There are {postArray.length} posts filed under this category.
        </Paragraph>

        {postArray.length > 0 && (
          <ul className="flex flex-col">
            {postArray.map(({ slug, title, date }) => (
              <li>
                <Link to={`/news/${slug}`}>
                  {moment(date).format("MMM D, YYYY")} – {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </PageContainer>
    </Layout>
  )
}

export default CategoryPage
