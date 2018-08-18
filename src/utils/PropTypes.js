import PropTypes from 'prop-types'

export const locationPropTypesShape = PropTypes.shape({
  hash: PropTypes.string,
  key: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  search: PropTypes.string,
  state: PropTypes.object,
})

export const pageContextPropTypesShape = PropTypes.shape({
  slug: PropTypes.string,
})

export const ImageFluidPropTypesShape = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      base64: PropTypes.string.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
})

export const localesPropTypesShape = {
  t: PropTypes.func.isRequired,
  config: PropTypes.func.isRequired,
}
