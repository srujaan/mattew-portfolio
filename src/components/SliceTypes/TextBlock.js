import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  overflow: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;

  span {
    padding: 2px 5px;
    font-size: 14px;
    font-family: 'Fira Mono', monospace;
    background: var(--text);
    color: var(--bg);
    border-radius: 5px;
  }
`

const TextBlock = ({
  content: {
    primary: {
      text: { html }
    }
  }
}) => {
  return (
    <TextContainer>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TextContainer>
  )
}

export default TextBlock
