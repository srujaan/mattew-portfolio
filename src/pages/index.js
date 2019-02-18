import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'

const BodyContainer = styled.div`
  padding-bottom: 10vh;
`

const SuperText = styled.h1`
  font-size: 4.2rem;
  padding: 0;
  margin: 0;
  &::before {
    content: '<';
    color: var(--text);
  }
  &::after {
    content: ' />';
    color: var(--text);
  }
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
      <SuperText>Hello</SuperText>
      <h1>{title.text}</h1>
      <BodyContainer dangerouslySetInnerHTML={{ __html: body.html }} />
      <RecentPostsContainer>
        <h2>Recent Posts</h2>
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
