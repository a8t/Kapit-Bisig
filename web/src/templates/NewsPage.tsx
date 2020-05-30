import React from "react"
import Img from "gatsby-image"
import moment from "moment"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PortableText from "../components/portableText"
import { Title } from "../components/ds/typography"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "../components/Link"

const NewsPage = ({ pageContext }) => {
  const { title, mainImage, content, date, categories = [] } = pageContext

  return (
    <Layout>
      <SEO title={title} />

      <div className="h-64 w-full z-0 relative news-hero">
        {/* <img
          src={mainImage.asset.fluid.src}
          className="object-contain h-full overflow-hidde z-0 relative m-auto"
          alt="Main image"
        /> */}
      </div>

      <article className="container py-8 z-10 bg-white relative">
        <div className="shadow-2xl -mt-32 mb-32 mx-auto bg-white rounded-sm max-w-4xl p-8 flex flex-col">
          <Title>
            <span className="text-3xl md:text-5xl">{title}</span>
          </Title>

          <div className="flex space-x-2 text-gray-600">
            <time>{moment(date).format("MMM D, YYYY")}</time> <span>•</span>
            {categories.length > 0 && (
              <div>
                <FontAwesomeIcon icon="folder" className="mr-2" />
                {categories.map(({ title, slug }) => (
                  <Link
                    to={`/news/categories/${slug.current}`}
                    className="mr-2"
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <hr className="my-8" />

          <section className="text-lg">
            <PortableText blocks={content} />
          </section>
        </div>
      </article>
    </Layout>
  )
}

export default NewsPage
