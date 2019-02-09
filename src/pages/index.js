import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'

import Particles from 'react-particles-js'
import { particles } from '../components/particles/particles-config'

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: 0;
  height: 100vh;
  overflow: scroll;
`

const ParticlesContainer = styled.div`
  position: absolute;
  top: 10%;
  height: 80vh;
  width: 100vw;
  z-index: -1;
`

const IndexPage = () => (
  <Layout>
    <ParticlesContainer>
      <Particles params={particles} />
    </ParticlesContainer>
    <div>
      <BrandContainer>
        <h1>thirteenthstreet.</h1>
      </BrandContainer>
    </div>
  </Layout>
)

export default IndexPage
