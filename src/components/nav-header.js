import React from "react"
import { Link } from "gatsby"
import resumePDF from '../images/lucas-dachman-resume-2019.pdf'

export default ({ current }) => {
  const worksLinkClass = current === 'works' ? 'current' : ''
  const contactLinkClass = current === 'contact' ? 'current' : '' 
  return (
    <nav className="nav-header">
      <Link to='/'>Lucas Dachman</Link>
      <Link to='/works/' className={worksLinkClass}>Works</Link>
      <a href={resumePDF}>Resume</a>
      <Link to='/contact/' className={contactLinkClass}>Contact</Link>
    </nav>
  )
}