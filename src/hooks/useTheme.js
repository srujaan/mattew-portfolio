import { useState, useLayoutEffect } from 'react'
import { light, dark } from '../theme/colors'

const isBrowser = typeof window !== 'undefined'

const initialState = () => {
  if (isBrowser) {
    return window.__theme === 'dark' ? dark : light
  }

  return light
}

const useTheme = () => {
  const [theme, switchTheme] = useState(initialState())

  useLayoutEffect(() => switchTheme(initialState()))

  const toggleTheme = () => {
    let darkMode = theme === dark
    let inverseTheme = darkMode ? 'light' : 'dark'

    if (isBrowser) {
      window.__setPreferredTheme(inverseTheme)
    }
    switchTheme(darkMode ? light : dark)
  }

  return [theme, toggleTheme]
}

export default useTheme
