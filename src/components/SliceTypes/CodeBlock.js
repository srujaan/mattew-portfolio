import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CodeBlockContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
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
