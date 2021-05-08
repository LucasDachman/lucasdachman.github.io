import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

// images
import shellIcon from "../images/icons/shell.svg";
import webDevIcon from "../images/icons/web-programmer.svg";
import soundIcon from "../images/icons/soundwave.svg";
import mobileIcon from "../images/icons/mobile.svg";

const IndexPage = () => (
  <>
    <main className="landing-main">
      <SEO
        title="Home"
        keywords={[`software developer`, `programmer`, `lucas`, `dachman`]}
      />
      <header className="landing-header">
        <h1>Lucas</h1>
        <h1>Dachman</h1>
        <h2>Software Developer</h2>
      </header>
      <div className="landing-icons">
        <img src={shellIcon} alt="shell" className="landing-icon" />
        <img src={webDevIcon} alt="web developer" className="landing-icon" />
        <img src={mobileIcon} alt="mobile phone" className="landing-icon" />
        <img src={soundIcon} alt="sound wave" className="landing-icon" />
      </div>
      <nav>
        <Link to="/about/" className="button">
          About
        </Link>
        <Link to="/works/" className="button">
          Works
        </Link>
        <Link to="/contact/" className="button">
          Contact
        </Link>
      </nav>
    </main>
  </>
);

export default IndexPage;
