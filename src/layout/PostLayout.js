import React from 'react'
import styled from 'styled-components'
import Layout from './layout'
import { graphql } from 'gatsby'

import Slices from '../components/Slices'
import GoBack from '../components/GoBack'

const PostContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const PostLayout = ({
  data: {
    prismicPost: {
      data: { body, title, date, description }
    }
  }
}) => {
  return (
    <Layout>
      <GoBack to='/blog' name='Blog' />
      <PostContainer>
        <h1>{title.text}</h1>
        <Slices body={body} />
      </PostContainer>
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
      data {
        title {
          text
        }
        description
        date(formatString: "DD.MM.YYYY")

        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyCodeBlock {
            slice_type
            id
            primary {
              code_block {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
                      ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPostBodyGif {
            slice_type
            id
            primary {
              gif {
                alt
                copyright
                url
              }
            }
          }
        }
      }
    }
  }
`
