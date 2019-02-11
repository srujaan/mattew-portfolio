const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicBlogPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve('src/layout/PostLayout.js')

  pages.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid
      }
    })
  })
}
