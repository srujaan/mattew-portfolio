import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ImgBlockContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
`

const ImageBlock = ({
  content: {
    primary: {
      image: {
        localFile: {
          childImageSharp: { fluid }
        }
      }
    }
  }
}) => (
  <ImgBlockContainer>
    <Img fluid={fluid} alt='code_block' />
  </ImgBlockContainer>
)

export default ImageBlock
