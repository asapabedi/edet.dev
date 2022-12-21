const rupture = require('rupture')
const path = require('path')
const config = require('./data/config')

const {
  siteMetadata,
  favicon,
  pluginFonts,
  remarkImages,
  remarkPrismjs,
  pluginSitemap,
  pluginAnalytics,
  pluginManifest,
  pluginCanonicalUrls,
} = config

module.exports = {
  siteMetadata,
  plugins: [{
    resolve: `gatsby-plugin-stylus`,
    options: {
      use: [rupture()]
    },
  },
  {
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: `Zilla Slab:wght@300;400;500;600;700`,
        },
        {
          family: `Roboto:wght@100;300;400;500;600;700`,
        }
      ]
    }
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: pluginSitemap
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: pluginFonts
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: pluginAnalytics
  },
  {
    resolve: 'gatsby-plugin-favicon',
    options: favicon
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: pluginCanonicalUrls,
  },
  ]
}
