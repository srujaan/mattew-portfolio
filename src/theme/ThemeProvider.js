import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './colors'

const initialState = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  console.log(darkMode)

  const userPrefersDarkMode = JSON.parse(
    window.localStorage.getItem('darkMode')
  )

  if (userPrefersDarkMode === null) {
    window.localStorage.setItem('darkMode', darkMode)
  }

  return darkMode || userPrefersDarkMode ? dark : light
}

export const Theme = ({ children, props }) => {
  const [theme, setTheme] = useState(initialState)

  const toggleTheme = () => {
    let darkMode = theme === dark
    window.localStorage.setItem('darkMode', !darkMode)
    setTheme(darkMode ? light : dark)
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
