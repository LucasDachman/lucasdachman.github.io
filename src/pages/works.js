import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import SEO from '../components/seo'
import NavHeader from '../components/nav-header'
import WorkPreview from '../components/work-preview'

const Works = () => (
  <>
    <SEO title="Works" />
    <NavHeader current='works'/>
      <StaticQuery query={postsQuery} render={data => {
        return (
          <main className="works-main">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <WorkPreview title={node.frontmatter.title}
                path={node.frontmatter.path}
                brief={node.frontmatter.brief}
                hero={node.frontmatter.media.hero.childImageSharp.fixed}
                key={node.frontmatter.path}/>
            ))}
          </main>
        )  
      }}/>
  </>
)

const postsQuery = graphql`
query {
  allMarkdownRemark (
    sort: {order: ASC, fields: fileAbsolutePath}
  ){
    edges {
      node {
        html
        frontmatter {
          title
          path
          brief
          media {
            hero {
              childImageSharp {
                fixed(height: 300, quality: 90) {
                  src,
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
}
`

// const postsQuery = graphql`
// query {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//           path
//           brief
//           image {
// 						childImageSharp {
//               fluid(maxWidth: 300, quality: 90) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//         html
//       }
//     }
//   }
// }
// `
export default Works