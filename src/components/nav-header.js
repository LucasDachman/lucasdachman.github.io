import React from "react"
import { Link } from "gatsby"

export default (props) => (
  <nav className="nav-header">
      <Link to='/'>Lucas Dachman</Link>
      <Link to='/works/' className='current'>Works</Link>
      <a href="https://github.com/lucasdachman">Resume</a>
      <a href="https://github.com/lucasdachman">Github</a>
  </nav>
)