import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './index'

export const Theme = ({ children, props }) => {
  const supportsDarkMode = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

  const [theme, setTheme] = useState(supportsDarkMode() ? dark : light)

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  return (
    <ThemeProvider
      theme={{
        colors: theme.colors,
        toggleTheme: () => toggleTheme()
      }}
    >
      {children}
    </ThemeProvider>
  )
}
