import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  span {
    padding: 2px 5px;
    font-size: 14px;
    font-family: 'source-code-pro', monospace;
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border-radius: 5px;
  }

  overflow: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

const TextBlock = ({
  content: {
    primary: {
      text: { html }
    }
  }
}) => (
  <TextContainer>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </TextContainer>
)

export default TextBlock
