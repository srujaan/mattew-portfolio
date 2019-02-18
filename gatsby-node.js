const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPosts = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const blogTemplate = path.resolve('src/layout/PostLayout.js')

  blogPosts.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: blogTemplate,
      context: {
        uid: edge.node.uid
      }
    })
  })

  const portfolioPages = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  const portfolioTemplate = path.resolve('src/layout/ProjectLayout.js')

  portfolioPages.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/project/${edge.node.uid}`,
      component: portfolioTemplate,
      context: {
        uid: edge.node.uid
      }
    })
  })
}
