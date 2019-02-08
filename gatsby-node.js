/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const Path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
            {
              allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      title
                      path
                    }
                    html
                  }
                }
              }
            }
        `).then(result => {
          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
              path: node.frontmatter.path,
              component: Path.resolve(`./src/components/detail-work.js`),
              context: {
                title: node.frontmatter.title,
                body: node.html,
              }
            })
          })
          resolve()
        })
  })
}