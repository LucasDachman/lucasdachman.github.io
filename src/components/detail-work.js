import React from 'react'

export default ({ pageContext }) => {
  const { title, body } = pageContext
    return (
      <main>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: body}}/>
      </main>
    )
}