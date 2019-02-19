const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

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

  // Create redirects from old pages to new.
  createRedirect({
    fromPath: '/supprtbot-writeup',
    toPath: '/project/supprtbot',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/freedom-genetics-llc-website',
    toPath: '/project/freedom-genetics-llc',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/colorboxes-writeup',
    toPath: '/project/color-boxes',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/nomadically-write-up',
    toPath: '/project/nomadically',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/newsfeeder-writeup',
    toPath: '/project/newsfeeder',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/building-a-basic-http-server-with-elixir-p1',
    toPath: '/blog/building-a-basic-http-server-with-elixir-p1',
    isPermanent: true
  })

  createRedirect({
    fromPath: '/building-a-basic-http-server-with-elixir-p2',
    toPath: '/blog/building-a-basic-http-server-with-elixir-p2',
    isPermanent: true
  })
}
