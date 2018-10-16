import React from 'react'
import PropTypes from 'prop-types'

const ArrowIcon = ({className}) => (
  <svg
    className={className}
    height="11.1213207"
    viewBox="0 0 19.4142132 11.1213207">
    <path
      fill="#25516C"
      d="M9.707 11.121l-9.707-9.707 1.414-1.414 8.293 8.293 8.293-8.293 1.414 1.414z"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon--expand"
      width="19.4142132"
      height="11.1213207"
      viewBox="0 0 19.4142132 11.1213207">
      <path
        fill="#25516C"
        d="M9.707 11.121l-9.707-9.707 1.414-1.414 8.293 8.293 8.293-8.293 1.414 1.414z"
      />
    </svg>
  </svg>
)

ArrowIcon.propTypes = {
  className: PropTypes.string,
}

ArrowIcon.defaultProps = {
  className: '',
}

export default ArrowIcon
