const path = require(`path`)
const React = require("react")
const ReactDOM = require("react-dom")
const BlockContent = require("@sanity/block-content-to-react")

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
  const { data } = await graphql(`
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

      provinces: allSanityProvince {
        nodes {
          _id
          name
        }
      }

      cities: allSanityCity {
        nodes {
          _id
          name
          province {
            name
          }
          requestForm
          volunteerForm
        }
      }

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
        }
      }
    }
  `)

  const { pages, routes, provinces, cities, organizations } = data

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

  // // create a page for each province
  // provinces.nodes.forEach(({ name, cities }) => {
  //   actions.createPage({
  //     path: `provinces/${toKebabCase(name)}`,
  //     component: path.resolve("src/templates/ProvincePage.tsx"),
  //     context: {
  //       // Data passed to context is available
  //       // in page queries as GraphQL variables.
  //       name,
  //       cities,
  //       organizations: organizations.nodes.filter(
  //         ({ province: organizationProvince }) =>
  //           name === organizationProvince.name
  //       ),
  //     },
  //   })
  // })

  // create a page for each province
  cities.nodes.forEach(({ name, province, requestForm, volunteerForm }) => {
    actions.createPage({
      path: `cities/${toKebabCase(name)}`,
      component: path.resolve("src/templates/CityPage.tsx"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        name,
        province,
        requestForm,
        volunteerForm,
        organizations: organizations.nodes.filter(({ cities }) =>
          cities.map(({ name }) => name).includes(name)
        ),
      },
    })
  })

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
    }) => {
      actions.createPage({
        path: `organizations/${toKebabCase(name)}`,
        component: path.resolve("src/templates/OrganizationPage.tsx"),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
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
        },
      })
    }
  )
}
