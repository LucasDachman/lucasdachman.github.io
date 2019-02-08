import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import SEO from '../components/seo'
import NavHeader from '../components/nav-header'
import WorkPreview from '../components/work-preview'

const Works = () => (
  <>
    <SEO title="Works" />
    <NavHeader />
      <StaticQuery query={postsQuery} render={data => {
        return (
          <main className="works-main">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <WorkPreview title={node.frontmatter.title}
                path={node.frontmatter.path}
                brief={node.frontmatter.brief}
                fluid={node.frontmatter.image.childImageSharp.fluid}/>
            ))}
          </main>
        )  
      }}/>
  </>
)

const postsQuery = graphql`
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
          brief
          image {
            childImageSharp {
              fluid(maxWidth: 270, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
export default Works