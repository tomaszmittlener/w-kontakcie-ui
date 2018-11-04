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

export const fluidPropTypesShape = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  base64: PropTypes.string,
  srcSetWebp: PropTypes.string,
  tracedSVG: PropTypes.string,
  srcWebp: PropTypes.string,
})

export const fixedPropTypesShape = PropTypes.shape({
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  base64: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
})

export const imageFluidPropTypesShape = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fluid: fluidPropTypesShape.isRequired,
  }).isRequired,
})

export const imageFixedPropTypesShape = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    fixed: fixedPropTypesShape.isRequired,
  }).isRequired,
})

export const localesPropTypesShape = {
  t: PropTypes.func.isRequired,
  config: PropTypes.func.isRequired,
}

export const articlesImagesPropTypesShape = PropTypes.shape({
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: fluidPropTypesShape.isRequired,
        }).isRequired,
        relativeDirectory: PropTypes.string.isRequired,
      }),
    }).isRequired,
  ).isRequired,
})

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
          title: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ),
})
export const articleMarkdownPropTypesShape = PropTypes.shape({
  excerpt: PropTypes.string.isRequired,
  fields: PropTypes.shape({
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    nextSlug: PropTypes.string.isRequired,
    nextTitle: PropTypes.string.isRequired,
    prevSlug: PropTypes.string.isRequired,
    prevTitle: PropTypes.string.isRequired,
  }).isRequired,
  frontmatter: PropTypes.shape({
    category: PropTypes.string,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  html: PropTypes.string.isRequired,
  htmlAst: PropTypes.shape({
    children: PropTypes.array.isRequired, // unpredictable structure
    data: PropTypes.shape({
      quirksMode: PropTypes.bool.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
  }),
  timeToRead: PropTypes.number.isRequired,
})
