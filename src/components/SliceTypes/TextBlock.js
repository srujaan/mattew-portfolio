import React from 'react'
import styled from 'styled-components'
import useRerenderOnClient from '../../hooks/useRerenderOnClient'

const TextContainer = styled.div`
  overflow: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;

  span {
    padding: 2px 5px;
    font-size: 14px;
    font-family: 'source-code-pro', monospace;
    background: ${props => props.mounted && props.theme.colors.text};
    color: ${props => props.mounted && props.theme.colors.background};
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
  const mounted = useRerenderOnClient()
  return (
    <TextContainer mounted={mounted}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TextContainer>
  )
}

export default TextBlock
