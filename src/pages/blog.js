import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/PostListing'
import SuperText from '../components/SuperText'

import Container from '../layout/Container'

const BlogPage = ({
  data: {
    allPrismicPost: { edges: posts }
  }
}) => {
  return (
    <Layout>
      <Container>
        <SuperText size='4em'>Blog</SuperText>
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
