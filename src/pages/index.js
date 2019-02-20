import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'
import SuperText from '../components/SuperText'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'

const RecentPostsContainer = styled.div`
  padding-top: 20vh;
  text-align: left;

  .title {
    font-size: 2em;
    color: var(--text);
  }

  h1 {
    font-size: 1.5em;
  }
`

const IndexPage = ({
  data: {
    allPrismicPost: { edges },
    prismicIndexpage: {
      data: { title, body }
    }
  }
}) => (
  <Layout>
    <Container>
      <SEO title='Matthew Secrist' />
      <SuperText>Hello</SuperText>
      <div>
        <h1>{title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: body.html }} />
        <RecentPostsContainer>
          <h1 className='title'>Recent Posts</h1>
          {edges.map(post => (
            <PostListing key={post.node.id} post={post} />
          ))}
        </RecentPostsContainer>
      </div>
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    prismicIndexpage {
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }

    allPrismicPost(limit: 3, sort: { fields: [data___date], order: DESC }) {
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
