const {
  author,
  bugs,
  description,
  homepage,
  keywords,
  name,
  repository,
  version
} = require('../package.json')

const services = require('./services')
const skills = require('./skills')

const isProduction = process.env.NODE_ENV === 'production'
const siteUrl = isProduction ? homepage : 'http://localhost:8000'

if (!isProduction) {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const subTitle = `· Fullstack Web Engineer`
const title = `${ author.name } ${ subTitle }`

const repo = {
  ...bugs,
  ...repository
}

const social = {
  paypal: `https://www.paypal.me/${ author.paypal }/5`,
  github: `https://github.com/${ author.github }`,
  dev: `https://dev.to/${ author.dev }`,
  twitter: `https://twitter.com/${ author.twitter }`,
  codepen: `https://codepen.io/${ author.codepen }`,
  npm: `https://www.npmjs.com/${ author.npm }`,
  linkedin: `https://linkedin.com/in/${ author.linkedin }`,
  instagram: `https://instagram.com/${ author.instagram }`,
  dribbble: `https://dribbble.com/${ author.dribbble }`,
  behance: `https://www.behance.net/${ author.behance }`
}

const navLinks = [{
  name: 'About',
  path: '/about'
}, {
  name: 'Portfolio',
  path: '/portfolio'
}, {
  name: 'Contact',
  path: '/contact'
}, {
  name: 'Blog',
  path: 'https://blog.edet.dev'
}]

const siteMetadata = {
  isProduction,
  name,
  version,
  title,
  defaultTitle: title,
  titleTemplate: `%s ${ subTitle }`,
  siteUrl,
  description,
  defaultDescription: description,
  author,
  twitterUsername: `@${ author.twitter }`,
  facebookAppID: '574993503437531',
  keywords,
  repo,
  social,
  navLinks,
  services,
  skills,
}

const pluginFonts = {
  fonts: [{
    family: `Zilla Slab`,
    variants: [`300`, `700`]
  }]
}

const pluginAnalytics = {
  trackingId: isProduction ? 'UA-73758675-2' : 'UA-73758675-2',
  head: true
}

const favicon = {
  logo: './static/icon.png',
  injectHTML: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: true,
    favicons: true,
    firefox: true,
    twitter: true,
    yandex: true,
    windows: true
  }
}

const remarkImages = {
  maxWidth: 1300,
  quality: 90,
  withWebp: true,
  linkImagesToOriginal: false,
  showCaptions: true,
}

const remarkPrismjs = {
  classPrefix: 'language-',
  inlineCodeMarker: null,
  aliases: {},
  showLineNumbers: false,
  noInlineHighlight: true
}

const pluginSitemap = {
  output: `/sitemap.xml`,
  exclude: [
    `/tags`,
    `/tag/*`,
    `/404`,
    `/404.html`
  ]
}

const pluginManifest = {
  name: `${ author.name }`,
  short_name: `${ name }`,
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#eee333',
  display: 'minimal-ui',
  icon: 'static/icon.png'
}

const pluginCanonicalUrls = { siteUrl }

module.exports = {
  siteMetadata,
  pluginFonts,
  pluginAnalytics,
  favicon,
  remarkImages,
  remarkPrismjs,
  pluginSitemap,
  pluginManifest,
  pluginCanonicalUrls
}
