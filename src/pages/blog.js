import React from 'react'
import Layout from '../layout/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/PostListing'

import Container from '../layout/Container'

const BlogPage = ({
  data: {
    allPrismicPost: { edges: posts }
  }
}) => {
  return (
    <Layout>
      <Container>
        {posts.map(post => (
          <PostListing post={post} />
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
