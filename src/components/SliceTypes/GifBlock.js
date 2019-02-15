import React from 'react'
import styled from 'styled-components'

const GifBlockContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
`

const GifBlock = ({
  content: {
    primary: {
      gif: { alt, copyright, url }
    }
  }
}) => {
  return (
    <GifBlockContainer>
      <img src={url} width='100%' />
    </GifBlockContainer>
  )
}

export default GifBlock
