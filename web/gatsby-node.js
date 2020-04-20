const path = require(`path`)
const React = require("react")
const ReactDOM = require("react-dom")
const BlockContent = require("@sanity/block-content-to-react")
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allSanityPage {
        nodes {
          _id
          title
          _rawContent
        }
      }

      allSanityRoute {
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

  const pages = result.data.allSanityPage.nodes

  result.data.allSanityRoute.nodes.forEach(({ page, slug }) => {
    actions.createPage({
      path: `${slug.current}`,
      component: path.resolve("src/templates/ContentPage.js"),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        page: pages.find(({ _id }) => _id === page._id),
      },
    })
  })
}
