import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CONFIG from '../../../data/SiteConfig'

const AppHelmet = ({title, description, meta, currentPath, ...props}) => {
  return (
    <Helmet title={title} description={description} meta={meta} {...props}>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${CONFIG.siteUrl}${currentPath}`} />
      <html lang="pl-PL" />
    </Helmet>
  )
}

AppHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
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
