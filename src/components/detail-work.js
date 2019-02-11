import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"

export default ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { fluid } = data.markdownRemark.frontmatter.image.childImageSharp

    return (
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}}/>
        <Img fluid={fluid} alt={title}/>
      </main>
    )
}

export const detailQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      image {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`