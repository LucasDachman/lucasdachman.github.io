import React from "react"
import { Link } from "gatsby"

export default ({ current }) => {
  const worksLinkClass = current === 'works' ? 'current' : ''
  const contactLinkClass = current === 'contact' ? 'current' : '' 
  return (
    <nav className="nav-header">
      <Link to='/'>Lucas Dachman</Link>
      <Link to='/works/' className={worksLinkClass}>Works</Link>
      <a href="https://github.com/lucasdachman">Resume</a>
      <Link to='/contact/' className={contactLinkClass}>Contact</Link>
    </nav>
  )
}