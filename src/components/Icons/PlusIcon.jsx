import React from 'react'
import PropTypes from 'prop-types'

const PlusIcon = ({className, isOpen}) => (
  <svg
    height="26.2000008"
    className={className}
    viewBox="0 0 26.2000008 26.2000008">
    <path
      fill="#25516C"
      d="M13.1 26.2c-7.223 0-13.1-5.876-13.1-13.1s5.877-13.1 13.1-13.1 13.1 5.876 13.1 13.1-5.877 13.1-13.1 13.1zm0-25c-6.562 0-11.9 5.339-11.9 11.9s5.338 11.9 11.9 11.9 11.9-5.339 11.9-11.9-5.338-11.9-11.9-11.9z"
    />
    <path
      className="icon__element icon__element--horizontal-bar"
      fill="#25516C"
      d="M8.636 12.5h8.929v1.199h-8.929z"
    />
    {!isOpen && (
      <path
        className="icon__element icon__element--vertical-bar"
        fill="#25516C"
        d="M12.5 8.636h1.2v8.928h-1.2z"
      />
    )}
  </svg>
)

PlusIcon.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
}

PlusIcon.defaultProps = {
  className: '',
  isOpen: false,
}

export default PlusIcon
