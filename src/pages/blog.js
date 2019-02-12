import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

const BlogPage = ({
  data: {
    allPrismicPost: { edges: posts }
  }
}) => {
  return (
    <Layout>
      {posts.map(post => {
        let {
          node: {
            uid,
            data: { date, title, description }
          }
        } = post

        return (
          <React.Fragment key={`${uid}`}>
            <Link to={`/blog/${uid}`}>
              <h2 key={`${uid}-title`}>{title.text}</h2>
            </Link>
            <p key={`${uid}-subtitle`}>{description}</p>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  {
    allPrismicPost {
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
