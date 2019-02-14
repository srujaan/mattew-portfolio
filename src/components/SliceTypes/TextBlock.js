import React from 'react'
import styled from 'styled-components'

const isBrowser = typeof window !== 'undefined'

const TextContainer = styled.div`
  ${isBrowser
    ? ({ theme: { colors } }) => `
  span {
    padding: 2px 5px;
    font-size: 14px;
    font-family: 'source-code-pro', monospace;
    background: ${colors.text};
    color: ${colors.background};
    border-radius: 5px;
  }

  overflow: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`
    : null}
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
