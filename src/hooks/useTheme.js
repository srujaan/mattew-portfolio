import { useState, useLayoutEffect } from 'react'
import { light, dark } from '../theme/colors'

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

  return {
    colors: {
      name: 'server',
      background: 'transparent',
      text: 'black',
      primary: 'black',
      navBg: 'white',
      navText: 'black',
      semiDark: 'black',
      codeBg: 'black'
    }
  }
}

const useTheme = () => {
  const [theme, switchTheme] = useState(initialState())

  useLayoutEffect(() => switchTheme(initialState()))

  const toggleTheme = () => {
    let darkMode = theme === dark

    if (isBrowser) {
      window.localStorage.setItem('darkMode', !darkMode)
    }
    switchTheme(darkMode ? light : dark)
  }

  return [theme, toggleTheme]
}

export default useTheme
