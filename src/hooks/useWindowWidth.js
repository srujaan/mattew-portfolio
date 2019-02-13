import { useState, useEffect } from 'react'
import { debounce } from 'underscore'

function useWindowWidth () {
  if (typeof window !== `undefined`) {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', debounce(handleResize, 100))
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    })

    return width
  }

  // SSR needs something to return here since no window
  return false
}

export default useWindowWidth
