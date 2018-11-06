const config = require('./data/SiteConfig')
const urljoin = require('url-join')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-pointer-events',
    // 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        appName: config.siteTitle,
        appDescription: config.siteDescription,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'pl-PL',
        background: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        orientation: 'any',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
  ],
}