import React from 'react'
import { Theme } from './src/theme/ThemeProvider'

export const wrapRootElement = ({ element }) => {
  return <Theme>{element}</Theme>
}
