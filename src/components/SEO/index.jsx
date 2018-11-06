import React, {Component} from 'react'
import Helmet from 'react-helmet'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

class Index extends Component {
  render() {
    const {postNode, postPath, postSEO, postCoverUrl} = this.props
    let title
    let description
    let image
    let postURL
    if (postSEO) {
      const postMeta = postNode.frontmatter
      ;({title} = postMeta)
      description = postMeta.description
        ? postMeta.description
        : postNode.excerpt
      image = postCoverUrl || 'logo.png'
      postURL = urljoin(config.siteUrl, config.pathPrefix, postPath)
    } else {
      title = config.siteTitle
      description = config.siteDescription
      image = config.siteLogo
    }

    image = urljoin(config.siteUrl, config.pathPrefix, image)
    const websiteURL = urljoin(config.siteUrl, config.pathPrefix)
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: websiteURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        logo: image,
        sameAs: config.socialMedia.map(media => media.link),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: config.phone,
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
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: websiteURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
        },
      )
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={image} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={postSEO ? postURL : websiteURL} />
        {postSEO ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="fb:app_id" content={config.siteFBAppID || ''} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter || ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}

export default Index
