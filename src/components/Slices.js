import React from 'react'

import CodeBlock from './SliceTypes/CodeBlock'
import ImageBlock from './SliceTypes/ImageBlock'
import TextBlock from './SliceTypes/TextBlock'
import QuoteBlock from './SliceTypes/QuoteBlock'

const Slices = ({ body }) => {
  const slices = body.map(s => {
    switch (s.slice_type) {
      case 'text':
        return <TextBlock content={s} />
      case 'code_block':
        return <CodeBlock key={s.id} content={s} />
      case 'image':
        return <ImageBlock key={s.id} content={s} />
      case 'quote':
        return <QuoteBlock key={s.id} content={s} />
      default:
        return null
    }
  })

  return <div>{slices}</div>
}

export default Slices
