import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'

const BlogPage = ({
  data: {
    allPrismicBlogPost: { edges: posts }
  }
}) => {
  return (
    <Layout>
      {posts.map(post => {
        let {
          node: {
            uid,
            data: { title, subtitle }
          }
        } = post

        return (
          <React.Fragment key={`${uid}`}>
            <Link to={`/blog/${uid}`}>
              <h2 key={`${uid}-title`}>{title.text}</h2>
            </Link>
            <p key={`${uid}-subtitle`}>{subtitle.text}</p>
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  {
    allPrismicBlogPost {
      edges {
        node {
          uid
          slugs
          data {
            title {
              text
            }
            subtitle {
              text
            }
          }
        }
      }
    }
  }
`
