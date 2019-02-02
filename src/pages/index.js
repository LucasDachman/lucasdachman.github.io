import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main>
      <header className='landing-header'>
        <h1>Lucas</h1>
        <h1>Dachman</h1>
      </header>
      <p className='landing-blurb'>Software Developer, Front-End, Mobile Applications, Music Technology</p>
      <Link to="/page-2/">Go to page 2</Link>
    </main>
  </>
)

export default IndexPage
