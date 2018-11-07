import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import CONFIG from '../../../data/SiteConfig'

const PAGE_META = {
  '': {
    path: '',
    title: 'Gabinet Psychoterapii i Rozwoju Osobistego',
    description: CONFIG.siteDescription,
  },
  about: {
    path: 'about',
    title: 'O mnie',
    description:
      'Nazywam się Anna Dejewska. Prowadzę terapię indywidualną osób dorosłych i młodzieży oraz life i business coaching.',
  },
  therapy: {
    path: 'therapy',
    title: 'Terapia',
    description:
      'Trudności w relacjach, Depresja, Kryzysy i trudności osobiste, Lęki, nerwice, Trudności w pracy',
  },
  coaching: {
    path: 'coaching',
    title: 'Coaching',
    description:
      'Prowadzę coaching w dla firm oraz osób indywidualnych. Coaching jest dla mnie procesem doskonalenia kompetencji w obszarze, który chce rozwijać Klient. Jest oparty na partnerskiej relacji i wzajemnym zaufaniu.',
  },
  contact: {
    path: 'contact',
    title: 'Kontakt',
    description: `Skontaktuj się ze mną. tel: ${
      CONFIG.userEmail
    }, adres gabinetu: ${CONFIG.streetAddress}, ${CONFIG.addressLocality}, ${
      CONFIG.postalCode
    }`,
  },
}

const AppHelmet = ({pathname}) => {
  const pathPrefix = CONFIG.pathPrefix ? CONFIG.pathPrefix : '/'
  const currentPath = pathname.replace(pathPrefix, '').replace('/', '')
  const metaData = get(PAGE_META, currentPath)

  return (
    <Helmet title={`${CONFIG.siteTitleShort} |  ${metaData.title}`}>
      <meta name="description" content={metaData.description} />
      <link rel="canonical" href={`${CONFIG.siteUrl}${currentPath}`} />
      <html lang="pl-PL" />
    </Helmet>
  )
}

AppHelmet.propTypes = {
  pathname: PropTypes.string.isRequired,
}

export default AppHelmet
