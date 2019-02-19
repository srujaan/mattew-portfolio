import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/PostListing'
import SuperText from '../components/SuperText'

import Container from '../layout/Container'
import SEO from '../components/SEO'

const BlogPage = ({
  data: {
    allPrismicPost: { edges: posts }
  }
}) => {
  return (
    <Layout>
      <SEO
        title='Blog - Matthew Secrist'
        description='Words and code.'
        pathname='/blog'
      />
      <Container>
        <SuperText>Blog</SuperText>
        {posts.map(post => (
          <PostListing key={post.node.id} post={post} />
        ))}
      </Container>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  {
    allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          id
          uid
          data {
            date
            title {
              text
            }
            description
          }
        }
      }
    }
  }
`
