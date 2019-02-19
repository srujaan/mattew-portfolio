import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import GoBack from '../components/GoBack'
import Img from 'gatsby-image'
import Slices from '../components/Slices'

const ProjectLayout = ({
  data: {
    prismicProject: {
      id,
      uid,
      data: {
        title,
        description,
        github,
        website,
        body,
        header_image: {
          localFile: {
            childImageSharp: { fluid }
          }
        }
      }
    }
  }
}) => {
  return (
    <Layout>
      <GoBack to='/portfolio' name='Portfolio' />
      <Img fluid={fluid} />
      <h1>{title.text}</h1>
      <p>Keywords: {description.text}</p>
      <a href={github.url}>Github</a> // <a href={website.url}>View</a>
      <Slices body={body} />
    </Layout>
  )
}

export default ProjectLayout

export const query = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      id
      uid
      data {
        title {
          text
        }
        description {
          text
        }
        github {
          url
        }
        website {
          url
        }
        body {
          ... on PrismicProjectBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
        }
        header_image {
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
  }
`
