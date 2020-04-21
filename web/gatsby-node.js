const path = require(`path`)
const React = require("react")
const ReactDOM = require("react-dom")
const BlockContent = require("@sanity/block-content-to-react")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const {
    data: { pages, routes, cities },
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

      cities: allSanityCity {
        nodes {
          city
          province
          requestForm
          volunteerForm
        }
      }
    }
  `)

  // create a page for each route
  routes.nodes.forEach(({ page, slug }) => {
    actions.createPage({
      path: `${slug.current}`,
      component: path.resolve("src/templates/ContentPage.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        page: pages.nodes.find(({ _id }) => _id === page._id),
      },
    })
  })

  // create a page for each city
  cities.nodes.forEach(({ city, province, requestForm, volunteerForm }) => {
    actions.createPage({
      path: `cities/${city.toLowerCase()}`,
      component: path.resolve("src/templates/CityPage.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        city,
        province,
        requestForm,
        volunteerForm,
      },
    })
  })

  })
}
