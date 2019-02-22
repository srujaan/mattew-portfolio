import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import GoBack from '../components/GoBack'
import Img from 'gatsby-image'

import SEO from '../components/SEO'

const ProjectLayout = ({
  data: {
    markdownRemark: {
      frontmatter: {
        slug,
        title,
        description,
        github,
        url,
        header: {
          childImageSharp: { fluid }
        }
      },
      html
    }
  }
}) => {
  console.log(fluid)
  return (
    <Layout>
      <SEO
        title={`${title} - Matthew Secrist`}
        description={description}
        pathname={`/project/${slug}`}
      />
      <GoBack to='/portfolio' name='Portfolio' />
      <Img fluid={fluid} />
      <h1>{title}</h1>
      <p>Keywords: {description}</p>
      <a href={github}>Github</a> // <a href={url}>View</a>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default ProjectLayout

export const query = graphql`
  query ProjectBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        github
        url
        header {
          childImageSharp {
            fluid(maxWidth: 800, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      html
    }
  }
`
