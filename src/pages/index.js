import React from 'react'
import Layout from '../layout/layout'
import styled from 'styled-components'

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  top: translatex(50%);
  margin-top: 10vh;
`

const IndexPage = () => (
  <Layout>
    <BrandContainer>
      <h1>Hello. My name is Matthew Secrist.</h1>
      <p>
        I’ve never been able to fit myself into a niche, as my interests span
        multiple areas. I classify myself as a front end developer, back end
        developer, designer and I’m currently working towards becoming an AWS
        Certified Solutions Architect.
      </p>
      <p>
        What drives me is a strong love of technology, a passion for making it
        easy for the end user, and a need to be the best I can be.
      </p>
      <p>
        I love to work with Javascript, NodeJS, and Elixir. I’ve dabbled in
        Ruby, Python and Erlang. My front end framework of choice is React. I’m
        familiar with AWS services like Lamdba, DynamoDB, API Gateway and S3. I
        am currently available for remote opportunities.
      </p>
    </BrandContainer>
  </Layout>
)

export default IndexPage
