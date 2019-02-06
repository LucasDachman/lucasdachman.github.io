import React from 'react'
import PropTypes from 'prop-types'
import img from '../images/wearable-midi.jpg'

const WorkPreview = (props) => (
  <article className='work-preview'>
    <img src={img} alt={props.img} />
    <p>{props.text}</p>
  </article>
)

WorkPreview.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string,
}


export default WorkPreview;