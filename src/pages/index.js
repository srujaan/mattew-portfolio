import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'
import SuperText from '../components/SuperText'
import SEO from '../components/SEO'

const BodyContainer = styled.div`
  padding-bottom: 10vh;
`

const RecentPostsContainer = styled.div`
  padding: 0 5vw 0 5vw;
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
      <SuperText size='3em'>Hello</SuperText>
      <h1>{title.text}</h1>
      <BodyContainer dangerouslySetInnerHTML={{ __html: body.html }} />
      <RecentPostsContainer>
        <SuperText size='1.5em'>Recent Posts</SuperText>
        {edges.map(edge => {
          const {
            node: {
              id,
              uid,
              data: { title, description }
            }
          } = edge
          return (
            <div key={id}>
              <Link to={`/blog/${uid}`}>
                <h3>{title.text}</h3>
              </Link>
              <p>{description}</p>
            </div>
          )
        })}
      </RecentPostsContainer>
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
