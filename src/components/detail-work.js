import React from 'react'
import Img from 'gatsby-image'

export default ({ pageContext }) => {
  const { title, body, image} = pageContext
    return (
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: body}}/>
        <Img fluid={image} alt={title}/>
      </main>
    )
}