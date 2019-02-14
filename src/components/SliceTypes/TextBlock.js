import React from 'react'
import styled from 'styled-components'

const TextContainer = styled.div`
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
    <div className='text-block' dangerouslySetInnerHTML={{ __html: html }} />
  </TextContainer>
)

export default TextBlock
