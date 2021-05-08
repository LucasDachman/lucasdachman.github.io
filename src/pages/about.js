import React from "react";
import NavHeader from "../components/nav-header";
import SEO from "../components/seo";
import * as styles from "./about.module.css";

const AboutPage = () => {
  return (
    <>
      <SEO title="About" />
      <NavHeader current="about" />
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>Hello, welcome to rombocom.</p>
      </main>
    </>
  );
};

export default AboutPage;
