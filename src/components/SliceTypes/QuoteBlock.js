import React from 'react'

const QuoteBlock = ({
  content: {
    primary: {
      quote: { html }
    }
  }
}) => <div dangerouslySetInnerHTML={{ __html: html }} />

export default QuoteBlock
