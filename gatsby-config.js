const config = require('./data/SiteConfig')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
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
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: config.googleAnalyticsID,
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: config.googleTagID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     appName: config.siteTitle,
    //     appDescription: config.siteDescription,
    //     developerName: null,
    //     developerURL: null,
    //     dir: 'auto',
    //     lang: 'pl-PL',
    //     background: config.backgroundColor,
    //     theme_color: config.themeColor,
    //     display: 'standalone',
    //     orientation: 'any',
    //     version: '1.0',
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       opengraph: true,
    //       twitter: true,
    //       yandex: true,
    //       windows: true,
    //     },
    //   },
    // },
  ],
}