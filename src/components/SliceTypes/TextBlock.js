import React from 'react'

const TextBlock = ({
  content: {
    primary: {
      text: { html }
    }
  }
}) => <div dangerouslySetInnerHTML={{ __html: html }} />

export default TextBlock
