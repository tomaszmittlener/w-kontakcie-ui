import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';

const AppHelmet = ({title, description}) => (

  <Helmet>

  <title>{title}</title>
  <meta name="description" content={description} />
</Helmet>

)

AppHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default AppHelmet