import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'
import SuperText from '../components/SuperText'
import SEO from '../components/SEO'
import PostListing from '../components/PostListing'

const BodyContainer = styled.div``

const RecentPostsContainer = styled.div`
  text-align: center;
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
      <BodyContainer>
        <h1>{title.text}</h1>
        <div
          style={{ paddingBottom: '10vh' }}
          dangerouslySetInnerHTML={{ __html: body.html }}
        />
        <RecentPostsContainer>
          {edges.map(post => (
            <PostListing key={post.node.id} post={post} />
          ))}
        </RecentPostsContainer>
      </BodyContainer>
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
