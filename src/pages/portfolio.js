import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'
import PortfolioListing from '../components/PortfolioListing'

import { graphql } from 'gatsby'

const PortfolioContainer = styled.div``

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  justify-content: center;
  align-items: center;
`

const Panel = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  height: 300px;
  width: 300px;
`

const PortfolioPage = ({
  data: {
    allPrismicProject: { edges: projects }
  }
}) => {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <PortfolioContainer>
        <GridWrapper>
          {projects.map(project => (
            <Panel key={project.node.id}>
              <PortfolioListing project={project} />
            </Panel>
          ))}
        </GridWrapper>
      </PortfolioContainer>
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
                  fixed(width: 300, height: 300) {
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
