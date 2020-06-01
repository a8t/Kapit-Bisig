const path = require(`path`)
const React = require("react")
const ReactDOM = require("react-dom")
const BlockContent = require("@sanity/block-content-to-react")
const moment = require("moment")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const toKebabCase = str => {
  if (!str) {
    console.log(str)
  }
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(e => e.toLowerCase())
    .join("-")
}

// /web/gatsby-node.js
// Notice the capitalized type names
exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    SanityCategory: {
      posts: {
        type: ["SanityPost"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityPost",
            query: {
              filter: {
                categories: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })
        },
      },
    },
    SanityProvince: {
      cities: {
        type: ["SanityCity"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityCity",
            query: {
              filter: {
                province: {
                  _id: {
                    eq: source._id,
                  },
                },
              },
            },
          })
        },
      },
    },
    SanityCity: {
      organizations: {
        type: ["SanityOrganization"],
        resolve(source, args, context, info) {
          return context.nodeModel.runQuery({
            type: "SanityOrganization",
            query: {
              filter: {
                cities: {
                  elemMatch: {
                    _id: {
                      eq: source._id,
                    },
                  },
                },
              },
            },
          })
        },
      },
    },
  }
  createResolvers(resolvers)
}

exports.createPages = async ({ graphql, actions }) => {
  await createPages(graphql, actions)
  await createOrganizationPages(graphql, actions)
  await createCityPages(graphql, actions)
  await createNewsPages(graphql, actions)
  await createCategoryPages(graphql, actions)
}

const createPages = async (graphql, actions) => {
  const {
    data: { pages, routes },
  } = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          _id
          title
          _rawContent
        }
      }
      routes: allSanityRoute {
        nodes {
          page {
            _id
          }
          slug {
            current
          }
        }
      }
    }
  `)

  // create a page for each route
  routes.nodes.forEach(({ page, slug }) => {
    actions.createPage({
      path: `${slug.current}`,
      component: path.resolve("src/templates/ContentPage.tsx"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        page: pages.nodes.find(({ _id }) => _id === page._id),
      },
    })
  })
}

const createOrganizationPages = async (graphql, actions) => {
  const {
    data: { organizations },
  } = await graphql(`
    query {
      organizations: allSanityOrganization {
        nodes {
          _id
          name
          cities {
            name
          }
          province {
            name
          }
          _rawContent
          email
          facebook
          instagram
          twitter
          website
          phone
          slug {
            current
          }
        }
      }
    }
  `)

  // create a page for each city
  organizations.nodes.forEach(
    ({
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
      slug,
    }) => {
      actions.createPage({
        path: `organizations/${slug.current}`,
        component: path.resolve("src/templates/OrganizationPage.tsx"),
        context: {
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
          slug,
        },
      })
    }
  )
}

const createCityPages = async (graphql, actions) => {
  const {
    data: { cities },
  } = await graphql(`
    query {
      cities: allSanityCity {
        nodes {
          _id
          name
          province {
            name
          }
          organizations {
            _id
            name
            cities {
              name
            }
            province {
              name
            }
            _rawContent
            email
            facebook
            instagram
            twitter
            website
            phone
            slug {
              current
            }
          }
          requestForm
          volunteerForm
        }
      }
    }
  `)

  // create a page for each province
  cities.nodes.forEach(
    ({ name, province, organizations, requestForm, volunteerForm }) => {
      actions.createPage({
        path: `cities/${toKebabCase(name)}`,
        component: path.resolve("src/templates/CityPage.tsx"),
        context: {
          name,
          province,
          requestForm,
          volunteerForm,
          organizations,
        },
      })
    }
  )
}

const createNewsPages = async (graphql, actions) => {
  const {
    data: { news },
  } = await graphql(`
    query {
      news: allSanityPost {
        nodes {
          title
          slug {
            current
          }
          date: _createdAt
          content: _rawText
          categories {
            title
            slug {
              current
            }
          }
          mainImage {
            asset {
              fluid(maxWidth: 700) {
                src
              }
            }
          }
        }
      }
    }
  `)

  // create a page for each province
  news.nodes.forEach(
    ({ title, date, slug, mainImage, content, categories }) => {
      actions.createPage({
        path: `news/${slug.current}`,
        component: path.resolve("src/templates/NewsPage.tsx"),
        context: {
          title,
          mainImage,
          content,
          date,
          categories,
        },
      })
    }
  )
}

const createCategoryPages = async (graphql, actions) => {
  const {
    data: { categories },
  } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          title
          slug {
            current
          }
          posts {
            title
            date: _createdAt
            content: _rawText
            categories {
              title
            }
            mainImage {
              asset {
                fluid(maxWidth: 700) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)

  // create a page for each province
  categories.nodes.forEach(({ title, slug, posts }) => {
    actions.createPage({
      path: `news/categories/${slug.current}`,
      component: path.resolve("src/templates/CategoryPage.tsx"),
      context: {
        title,
        slug,
        posts,
      },
    })
  })
}
