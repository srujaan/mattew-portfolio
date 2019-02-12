import React from 'react'
import Img from 'gatsby-image'

const CodeBlock = ({
  content: {
    primary: {
      code_block: {
        localFile: {
          childImageSharp: { fluid }
        }
      }
    }
  }
}) => <Img fluid={fluid} alt='code_block' />

export default CodeBlock
