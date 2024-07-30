'use client'

import { useEffect } from 'react'

export default function BoostrapInit () {
  useEffect(() => {
    import('bootstrap')
  }, [])
  return null
}
