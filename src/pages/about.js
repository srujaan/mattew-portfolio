import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  top: 0;
  height: 100vh;
  overflow: scroll;
`

const AboutPage = () => (
  <Layout>
    <div>
      <BrandContainer>
        <h1>thirteenthstreet.</h1>
      </BrandContainer>
    </div>
  </Layout>
)

export default AboutPage
