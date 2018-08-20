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

export const articlesExcerptsPropTypesShape = PropTypes.shape({
  totalCount: PropTypes.number.isRequired,
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        timeToRead: PropTypes.number.isRequired,
        excerpt: PropTypes.string.isRequired,
        fields: PropTypes.shape({
          date: PropTypes.string.isRequired,
          slug: PropTypes.string.isRequired,
          directory: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          cover: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
})
