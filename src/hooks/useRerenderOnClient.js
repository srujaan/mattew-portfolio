import { useState, useLayoutEffect } from 'react'

const useRerenderOnClient = () => {
  const [mounted, didMount] = useState(false)

  useLayoutEffect(() => didMount(true))

  return mounted
}

export default useRerenderOnClient
