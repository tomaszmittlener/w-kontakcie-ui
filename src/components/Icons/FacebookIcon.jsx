import React from 'react'
import PropTypes from 'prop-types'

const FacebookIcon = ({className}) => (
  <svg
    className={className}
    version="1.1"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
  </svg>
)

FacebookIcon.propTypes = {
  className: PropTypes.string,
}

FacebookIcon.defaultProps = {
  className: '',
}

export default FacebookIcon
