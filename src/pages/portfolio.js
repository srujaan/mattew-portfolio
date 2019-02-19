import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import PortfolioListing from '../components/PortfolioListing'
import SuperText from '../components/SuperText'

import { graphql } from 'gatsby'

import Container from '../layout/Container'
import SEO from '../components/SEO'

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 250px);
  grid-auto-rows: 250px;
  justify-content: center;
  align-items: center;
`

const Panel = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  height: 250px;
  width: 250px;
`

const PortfolioPage = ({
  data: {
    allPrismicProject: { edges: projects }
  }
}) => {
  return (
    <Layout>
      <Container>
        <SEO
          title='Portfolio - Matthew Secrist'
          description='Projects and Images.'
          pathname='/portfolio'
        />
        <SuperText size='2.5em'>Portfolio</SuperText>
        <GridWrapper>
          {projects.map(project => (
            <Panel key={project.node.id}>
              <PortfolioListing project={project} />
            </Panel>
          ))}
        </GridWrapper>
      </Container>
    </Layout>
  )
}

export default PortfolioPage

export const pageQuery = graphql`
  {
    allPrismicProject {
      edges {
        node {
          id
          uid
          data {
            title {
              text
            }
            description {
              text
            }
            project_image {
              localFile {
                childImageSharp {
                  fixed(width: 250, height: 250) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
