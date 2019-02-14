import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout/layout'

import Container from '../layout/Container'

const BodyContainer = styled.div`
  padding-top: 2em;
`

const IndexPage = ({
  data: {
    prismicIndexpage: {
      data: { title, body }
    }
  }
}) => (
  <Layout>
    <Container>
      <h1>{title.text}</h1>
      <BodyContainer dangerouslySetInnerHTML={{ __html: body.html }} />
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
  }
`
