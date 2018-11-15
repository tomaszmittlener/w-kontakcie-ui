import React, {Component} from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import CONFIG from 'constants/SiteConfig'

class SEO extends Component {
  render() {
    const image = urljoin(CONFIG.siteUrl, CONFIG.siteLogo)

    const schemaOrgJSONLD = [
      {
        '@context': 'http://www.schema.org',
        '@type': 'LocalBusiness',
        name: 'W Relacji',
        url: CONFIG.siteUrl,
        logo: image,
        image,
        telephone: CONFIG.phone,
        description: CONFIG.siteDescription,
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONFIG.addressLocality,
          addressLocality: CONFIG.addressLocality,
          addressRegion: 'Pomorskie',
          postalCode: CONFIG.postalCode,
          addressCountry: 'Polska',
        },
        sameAs: CONFIG.socialMedia.map(media => media.link),
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '54.379154',
          longitude: '18.6115159',
        },
        hasMap: CONFIG.mapUrl,
        openingHours: 'Mo, Tu, We, Th, Fr 08:00-20:00',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONFIG.phone,
          contactType: 'customer support',
        },
      },
    ]
    const VALIDATION_META = [
      {
        name: 'google-site-verification',
        content: CONFIG.googleSiteVerificationId,
      },
      {
        name: 'msvalidate.01',
        content: CONFIG.bingSiteVerificationId,
      },
    ]
    const OPEN_GRAPH_META = [
      {
        property: 'og:url',
        content: CONFIG.siteUrl,
      },
      {
        property: 'og:title',
        content: CONFIG.siteTitle,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: CONFIG.siteDescription,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'fb:app_id',
        content: CONFIG.siteFBAppID || '',
      },
    ]
    const TWITTER_META = [
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:creator',
        content: CONFIG.userTwitter || '',
      },
      {
        name: 'twitter:title',
        content: CONFIG.siteTitle,
      },
      {
        name: 'twitter:description',
        content: CONFIG.siteDescription,
      },
      {
        name: 'twitter:image',
        content: image,
      },
    ]

    const META_TAGS = [...VALIDATION_META, ...OPEN_GRAPH_META, ...TWITTER_META]

    return (
      <Helmet meta={META_TAGS}>
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>
      </Helmet>
    )
  }
}

export default SEO
