import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { toKebabCase } from "../../utils/toKebabCase"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Title, Subtitle } from "../../components/ds/typography"
import PageContainer from "../../components/ds/PageContainer"
import NewsHero from "../../components/news/NewsHero"
import RecentArticle from "../../components/news/RecentArticle"
import CategoryChip from "../../components/news/CategoryChip"

const PostsPage = ({}) => {
  const { allPosts, allCategories } = useStaticQuery(
    graphql`
      query NewsPageQuery {
        allPosts: allSanityPost(
          limit: 10
          sort: { fields: _createdAt, order: DESC }
        ) {
          postCount: totalCount
          posts: nodes {
            categories {
              slug {
                current
              }
              title
            }
            slug {
              current
            }
            _createdAt
            title
            previewText
            mainImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }

        allCategories: allSanityCategory(
          limit: 10
          sort: { fields: _createdAt, order: DESC }
        ) {
          categoryCount: totalCount
          categories: nodes {
            slug {
              current
            }
            color {
              hex
            }
            title
            description
          }
        }
      }
    `
  )

  const { postCount, posts } = allPosts
  const { categoryCount, categories } = allCategories

  const groupSize = 1

  const firstArticles = posts.slice(0, groupSize)
  const remainingArticles = posts.slice(groupSize)

  return (
    <Layout>
      <SEO title="News | Kapit-Bisig Canada" />
      <NewsHero />
      <PageContainer className="grid lg:grid-cols-3 col-gap-8 row-gap-12">
        <section className="p-8 bg-blue-100 rounded-md shadow-lg self-start -mt-20 z-20 lg:col-span-2">
          <Title>Featured</Title>

          <div className="space-y-4">
            {firstArticles.map(post => (
              <RecentArticle {...post} key={post.title} />
            ))}
          </div>
        </section>

        <section className="p-8 bg-gray-100 rounded-md shadow-md self-start z-20 row-auto">
          <Title>Categories</Title>
          <ul className="flex gap-2 flex-wrap">
            {categories.map(({ title, description, slug, color }) => {
              return (
                <li>
                  <CategoryChip
                    title={title}
                    description={description}
                    slug={slug}
                    color={color}
                  />
                </li>
              )
            })}
          </ul>
        </section>

        <section className="space-y-4 lg:col-span-2">
          <Title>Recent articles</Title>
          {remainingArticles.map(post => (
            <RecentArticle {...post} key={post.title} />
          ))}
        </section>
      </PageContainer>
    </Layout>
  )
}

export default PostsPage
