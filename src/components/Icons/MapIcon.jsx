import React from 'react'
import PropTypes from 'prop-types'

const MapIcon = ({className}) => (
  <svg
    className={className}
    version="1.1"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
  </svg>
)

MapIcon.propTypes = {
  className: PropTypes.string,
}

MapIcon.defaultProps = {
  className: '',
}

export default MapIcon
