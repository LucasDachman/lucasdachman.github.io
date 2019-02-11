import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import NavHeader from '../components/nav-header'

export default ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { fluid } = data.markdownRemark.frontmatter.image.childImageSharp

    return (
      <>
      <NavHeader />
      <main className='detail-work-main'>
        <Img fluid={fluid} alt={title}/>
        <section>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{__html: html}}/>
        </section>
      </main>
      </>
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