import React from "react"
import { Link } from 'gatsby'

import SEO from '../components/seo'
import NavHeader from '../components/nav-header'
import previews from '../copy/previews.json'
import WorkPreview from '../components/work-preview'

const Works = () => (
  <>
    <SEO title="Works" />
    <NavHeader />
    <main className="works-main">
        <WorkPreview img={previews[0].img} text={previews[0].text}/>
        <WorkPreview img={previews[0].img} text={previews[0].text}/>
        <WorkPreview img={previews[0].img} text={previews[0].text}/>
        <WorkPreview img={previews[0].img} text={previews[0].text}/>
    </main>
  </>
)

export default Works