require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Matthew Secrist`,
    titleTemplate: '%s',
    siteUrl: `https://www.matthewsecrist.net`,
    description: `Matthew Secrist - https://www.matthewsecrist.net - Full Stack Web Developer in Boone, Iowa.`,
    twitterUsername: `@_mattsecrist`,
    twitter: 'https://twitter.com/_mattsecrist',
    github: 'http://www.github.com/matthewsecrist',
    linkedin: 'https://www.linkedin.com/in/matthew-secrist/',
    codepen: 'http://codepen.io/msecrist',
    email: 'matthew@matthewsecrist.net'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['IBM Plex Sans:300,700']
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: 'transparent'
            }
          }
        ]
      }
    },
    `gatsby-plugin-netlify`
  ]
}
