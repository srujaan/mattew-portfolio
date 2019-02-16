import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
  overflow: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;

  span {
    font-family: source-code-pro, monospace;
    font-weight: 400;
    font-style: normal;
    font-variant-ligatures: common-ligatures;
    -moz-font-feature-settings: 'liga';
    -webkit-font-feature-settings: 'liga';
    font-feature-settings: 'liga' on;
    padding: 2px 5px;
    font-size: 14px;
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
