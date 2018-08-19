import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({src, aspectRatio, maxWidth, className, alt, title}) => {
  const image = {
    base64: '',
    sizes: `(max-width: ${maxWidth}) 100vw, ${maxWidth}`,
    srcSet: '',
    src,
    aspectRatio,
  }
  return <Img fluid={image} className={className} alt={alt} title={title}/>
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number,
  maxWidth: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

Image.defaultProps = {
  aspectRatio: 4,
  maxWidth: '1920px',
  className: '',
}

export default Image
