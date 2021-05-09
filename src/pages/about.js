import React from "react";
import * as styles from "./about.module.css";
import NavHeader from "../components/nav-header";
import SEO from "../components/seo";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <NavHeader current="about" />
      <main className={styles.main}>
        <section className={`copy ${styles.copy}`}>
          <h1>About Me</h1>
          <p>
            I design and write code for web apps, mobile devices, and music.
          </p>

          <p>
            As a student at CU Boulder’s College of Engineering, I graduated
            with a bachelor's degree in{" "}
            <a href="https://www.colorado.edu/atlas/academics/undergraduate">
              Creative Technology &amp; Design
            </a>{" "}
            (previously, TAM) where I participated in a broad, transdisciplinary
            curriculum that integrated technological skills with a critical,
            theoretical and historical understanding of creativity, technology
            and design.
          </p>
          <p>
            In the past couple years I have worked to co-found a SaaS based
            company called <a href="https://dialed.ai/">Dialed.ai</a> that makes
            productivity software.
          </p>

          <p>
            In my free time, I like reading Sci-Fi, playing with synthesizers,
            and snowboarding.
          </p>
        </section>

        <StaticQuery
          query={query}
          render={(data) => {
            console.log(data);
            return (
              <Img
                className={styles.portrait}
                fluid={data.file.childImageSharp.fluid}
                alt="portrait"
              />
            );
          }}
        />
      </main>
    </>
  );
};

export const query = graphql`
  query {
    file(relativePath: { eq: "lucas-dachman-portrait-8x10.png" }) {
      childImageSharp {
        fluid(maxWidth: 480) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
