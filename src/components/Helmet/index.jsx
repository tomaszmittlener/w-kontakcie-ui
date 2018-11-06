import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const AppHelmet = ({title, description, meta}) => (
  <Helmet
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      ...meta,
    ]}>
    <html lang="pl-PL" />
    <meta name="msvalidate.01" content="A9947AA1BFA3D207E2553A0C1A38BEFE" />
  </Helmet>
)

AppHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
}

AppHelmet.defaultProps = {
  meta: [],
}

export default AppHelmet
