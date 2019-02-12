require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const path = require('path')

module.exports = {
  siteMetadata: {
    twitter: 'https://twitter.com/_mattsecrist',
    github: 'http://www.github.com/matthewsecrist',
    linkedin: 'https://www.linkedin.com/in/matthew-secrist/',
    codepen: 'http://codepen.io/msecrist',
    email: 'matthew@matthewsecrist.net'
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `matthewsecrist`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/blog/${post.uid}`
      }
    }
  ]
}
