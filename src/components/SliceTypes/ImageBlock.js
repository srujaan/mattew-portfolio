import React from 'react'
import Img from 'gatsby-image'

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
}) => <Img fluid={fluid} alt='code_block' />

export default ImageBlock
