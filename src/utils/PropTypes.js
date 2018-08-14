import PropTypes from 'prop-types'

export const locationPropTypesShape = PropTypes.shape({
  hash: PropTypes.string,
  key: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string,
  state: PropTypes.object,
})
