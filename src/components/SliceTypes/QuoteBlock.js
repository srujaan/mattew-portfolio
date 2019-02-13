import React from 'react'
import styled from 'styled-components'

const BlockQuoteContainer = styled.div`
  blockquote {
    margin: 0 auto;
    padding-left: 1em;
    border-left: 5px solid ${props => props.theme.colors.primary};

    * {
      color: ${props => props.theme.colors.text};
    }
  }
`

const QuoteBlock = ({
  content: {
    primary: {
      quote: { html }
    }
  }
}) => (
  <BlockQuoteContainer>
    <blockquote dangerouslySetInnerHTML={{ __html: html }} />
  </BlockQuoteContainer>
)

export default QuoteBlock
