import { useState, useEffect } from 'react'
import { Api } from '../../api/api'

export function Home() {
  const [aboutUs, setAboutUs] = useState({})
  const [teamMembers, setTeamMembers] = useState({})

  useEffect(() => {
    Api.getAboutUs(aboutUs, setAboutUs)
    Api.getTeamMember(teamMembers, setTeamMembers)
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}
