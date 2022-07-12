import { useState, useEffect } from 'react'
import { Api } from '../../api/api'
export function Home() {
  const [data, setData] = useState({})

  useEffect(() => {
    Api.getAboutUs(data, setData)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}
