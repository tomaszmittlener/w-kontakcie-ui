const CONFIG = require('./src/constants/SiteConfig')
const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: CONFIG.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        layout: path.join(__dirname, 'src/layout'),
        constants: path.join(__dirname, 'src/constants'),
        components: path.join(__dirname, 'src/components'),
        containers: path.join(__dirname, 'src/containers'),
        context: path.join(__dirname, 'src/context'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
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
        id: CONFIG.googleTagID,
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: config.siteTitle,
    //     short_name: config.siteTitleShort,
    //     start_url: `/`,
    //     background_color: config.backgroundColor,
    //     theme_color: config.themeColor,
    //     display: `minimal-ui`,
    //     icon: `src/favicon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        appName: CONFIG.siteTitle,
        appDescription: CONFIG.siteDescription,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'pl-PL',
        background: CONFIG.backgroundColor,
        theme_color: CONFIG.themeColor,
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
    'gatsby-plugin-offline',
  ],
}
