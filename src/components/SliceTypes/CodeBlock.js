import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CodeBlockContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  img {
    width: 100%;
  }
`

const CodeBlock = ({
  content: {
    primary: {
      code_block: {
        localFile: {
          childImageSharp: { fluid }
        }
      }
    }
  }
}) => (
  <CodeBlockContainer>
    <Img fluid={fluid} alt='code_block' />
  </CodeBlockContainer>
)

export default CodeBlock
