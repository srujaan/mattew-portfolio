import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './colors'

const isBrowser = typeof window !== 'undefined'

const initialState = () => {
  if (isBrowser) {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    const userPrefersDarkMode = JSON.parse(
      window.localStorage.getItem('darkMode')
    )

    if (userPrefersDarkMode === null) {
      window.localStorage.setItem('darkMode', darkMode)
    }

    return darkMode || userPrefersDarkMode ? dark : light
  }

  return light
}

class Theme extends React.Component {
  state = {
    theme: light
  }

  componentDidMount = () => {
    this.setState({ theme: initialState() })
  }

  toggleTheme = () => {
    let darkMode = this.state.theme === dark
    if (isBrowser) {
      window.localStorage.setItem('darkMode', !darkMode)
    }
    this.setState({ theme: darkMode ? light : dark })
  }

  render () {
    const { children } = this.props
    const { theme } = this.state
    return (
      <ThemeProvider
        theme={{
          colors: theme.colors,
          toggleTheme: () => this.toggleTheme()
        }}
      >
        {children}
      </ThemeProvider>
    )
  }
}

export default Theme
