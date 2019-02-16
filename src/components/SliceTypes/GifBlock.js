import React from 'react'
import styled from 'styled-components'

const GifBlockContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 10px;

  img {
    max-width: 100%;
  }
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
      <img src={url} />
    </GifBlockContainer>
  )
}

export default GifBlock
