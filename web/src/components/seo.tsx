/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import og from "../images/OG-image.png"
function SEO({ description, lang, meta, title, ogImage = null }) {
  const { site, defaultOgImage } = useStaticQuery(
    graphql`
      query {
        site: sanitySiteConfig {
          title
          url
          frontpage {
            id
          }
        }
        defaultOgImage: file(relativePath: { eq: "kapitbisig-og.png" }) {
          childImageSharp {
            original {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription =
    description || site.description || "We're in this together."

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: ogImage || og || defaultOgImage.childImageSharp.original.src,
        },
        {
          property: `og:image:width`,
          content: 1200,
        },
        {
          property: `og:image:height`,
          content: 630,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "Kapit-Bisig Canada",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
