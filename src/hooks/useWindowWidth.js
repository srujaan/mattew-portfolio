import { useState, useEffect } from 'react'

function useWindowWidth () {
  if (typeof window !== `undefined`) {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize, 100)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return width
  }
}

export default useWindowWidth
