import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <main className='landing-main'>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <header className='landing-header'>
        <h1>Lucas</h1>
        <h1>Dachman</h1>
        <p className='landing-blurb'>Software Developer, Front-End, Mobile Applications, Music Technology</p>
      </header>
      <nav>
        <Link to="/works/" className='button'>Works</Link>
        <Link to="/page-2/" className='button'>Resume</Link>
        <a href="https://github.com/lucasdachman" className='button'>Github</a>
      </nav>
    </main>
  </>
)

export default IndexPage
