import React from 'react'
import styled from 'styled-components'

import CodeBlock from './SliceTypes/CodeBlock'
import ImageBlock from './SliceTypes/ImageBlock'
import TextBlock from './SliceTypes/TextBlock'
import QuoteBlock from './SliceTypes/QuoteBlock'
import GifBlock from './SliceTypes/GifBlock'

const SliceContainer = styled.div`
  max-width: 80vw;
`

const Slices = ({ body }) => {
  const slices = body.map(s => {
    console.log(s.slice_type)
    switch (s.slice_type) {
      case 'text':
        return <TextBlock key={s.id} content={s} />
      case 'code_block':
        return <CodeBlock key={s.id} content={s} />
      case 'image':
        return <ImageBlock key={s.id} content={s} />
      case 'quote':
        return <QuoteBlock key={s.id} content={s} />
      case 'gif':
        return <GifBlock key={s.id} content={s} />
      default:
        return null
    }
  })

  return <SliceContainer>{slices}</SliceContainer>
}

export default Slices
