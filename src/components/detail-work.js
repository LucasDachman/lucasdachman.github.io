import React from 'react'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import NavHeader from '../components/nav-header'
import Slider from "react-slick"

export default ({ data }) => {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const mediaImages = data.markdownRemark.frontmatter.media.images.map(({childImageSharp}) => childImageSharp.fluid)

  return (
    <>
    <NavHeader />
    <main className='detail-work-main'>
      <SliderView fluidImages={mediaImages}/>
      <section className='copy'>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </section>
    </main>
    </>
  )
}

const SliderView = ({fluidImages}) => {
  console.log('fluidImages', fluidImages)
  const settings = {
    customPaging: (i) => (<a><Img fluid={fluidImages[i]}/></a>),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
  }
  return (
    <Slider {...settings}>
      {fluidImages.map((fluid, i) => <Img fluid={fluid} key={i}/>)}
    </Slider>
  )
}

export const detailQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      media {
        images {
          childImageSharp {
            fluid(maxWidth: 500, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`