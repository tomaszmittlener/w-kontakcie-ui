import React, {Component} from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import CONFIG from '../../../data/SiteConfig'

class SEO extends Component {
  render() {
    const image = urljoin(CONFIG.siteUrl, CONFIG.siteLogo)

    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: CONFIG.siteUrl,
        name: CONFIG.siteTitle,
        alternateName: CONFIG.siteTitleAlt ? CONFIG.siteTitleAlt : '',
        logo: image,
        sameAs: CONFIG.socialMedia.map(media => media.link),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONFIG.phone,
          contactType: 'Kontakt',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Waryńskiego 40c/1',
          addressLocality: 'Gdańsk',
          addressRegion: 'GDA',
          postalCode: '80-433',
          addressCountry: 'PL',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 54.379154,
          longitude: 18.6115159,
        },
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
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
