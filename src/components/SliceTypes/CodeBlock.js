import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CodeBlockContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;

  img {
    width: 100%;
    background: var(--codeBg);
    box-shadow: inset 0 0 10px var(--shadow);
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
}) => {
  return (
    <CodeBlockContainer>
      <Img className='code-block' fluid={fluid} alt='code_block' />
    </CodeBlockContainer>
  )
}

export default CodeBlock
