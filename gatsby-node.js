/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const Path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

/*
  https://www.gatsbyjs.org/tutorial/part-seven/

  Find all the markdown files and create custom paths for the dynamically created pages
*/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: node.frontmatter.path,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (
          sort: {order: ASC, fields: [fileAbsolutePath]}
        ){
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
        `).then(result => {
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
              path: node.fields.slug,
              component: Path.resolve(`./src/components/detail-work.js`),
              context: {
                slug: node.fields.slug
              }
            })
          })
          resolve()
        })
  })
}
