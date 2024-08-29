import { useEffect, useState } from "react"
import { api } from "../../lib/axios"
import GitHubIcon from '@mui/icons-material/GitHub'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LaunchIcon from '@mui/icons-material/Launch';

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  followers: number
  html_url: string
}

export function Header() {
  const [user, setUser] = useState<User>()

  async function userInfo() {
    const response = await api.get('/users/ipaulinh0')
    setUser(response.data)
  }

  useEffect(() => {
    userInfo()
  }, [])

  return(
    <div className="bg-base-profile w-[56rem] h-52 flex items-center gap-8 rounded-xl mt-12 -mb-32 shrink-0 p-8 max-sm:w-96 max-sm:h-44">
      <div>
        <img src={user?.avatar_url} className="w-40 rounded-lg max-sm:w-72"/>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-2xl text-base-title max-sm:text-lg">{user?.name}</p>
          <a href={user?.html_url} className="text-blue text-[.75rem] flex items-center gap-2 hover:text-base-subtitle">
            GITHUB
            <LaunchIcon className="text-blue" sx={ {fontSize: 12} }/>
          </a>
        </div>

        <div className="text-base text-base-text mb-6 max-sm:text-sm">{user?.bio}</div>

        <div className="flex gap-6">
          <a href={user?.html_url} className="text-base text-base-subtitle flex items-center gap-2 max-sm:text-sm">
            <GitHubIcon className="text-base-label" sx={ {fontSize: 18} }/>
            {user?.login}
          </a>
          <p className="text-base-subtitle text-base flex items-center gap-2 max-sm:text-sm">
            <PeopleAltIcon className="text-base-label" sx={ {fontSize:18} }/>
            Follower {user?.followers}
          </p>
        </div>
      </div>
    </div>
  )
}