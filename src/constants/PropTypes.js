import PropTypes from 'prop-types'

// Text component PropTypes
export const textPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
}

export const textDefaultProps = {
  children: null,
  className: '',
  color: null,
  size: null,
  weight: null,
}