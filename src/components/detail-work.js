import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import NavHeader from "../components/nav-header";
import ImageGallery from "react-image-gallery";

export default ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, year } = data.markdownRemark.frontmatter;
  const mediaImages = data.markdownRemark.frontmatter.media.images;
  const imageItems = mediaImages.map(
    ({ childImageSharp }) => childImageSharp.fluid
  );

  return (
    <>
      <NavHeader />
      <main className="detail-work-main">
        <ImageGallery
          items={imageItems}
          renderItem={renderItem}
          renderThumbInner={renderThumb}
          showThumbnails={imageItems.length > 1}
        />
        <section className="copy">
          <h1>{title}</h1>
          {year && <small>{year}</small>}
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </main>
    </>
  );
};

const renderItem = (item) => {
  return <Img fluid={item} />;
};

const renderThumb = (item) => {
  return <Img fluid={item} />;
};

export const detailQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        year
        media {
          images {
            childImageSharp {
              fluid(maxHeight: 500, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
