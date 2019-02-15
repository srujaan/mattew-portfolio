import React, { useState, useLayoutEffect } from 'react'
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
    background: ${props =>
    props.mounted && props.theme.colors.name === 'dark'
      ? props.theme.colors.text
      : 'transparent'};
    box-shadow: ${props =>
    props.mounted && props.theme.colors.name === 'dark'
      ? 'inset 0 0 10px #000000;'
      : 'none'};
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
  const [mounted, didMount] = useState(false)
  useLayoutEffect(() => didMount(true))
  return (
    <CodeBlockContainer mounted={mounted}>
      <Img className='code-block' fluid={fluid} alt='code_block' />
    </CodeBlockContainer>
  )
}

export default CodeBlock
