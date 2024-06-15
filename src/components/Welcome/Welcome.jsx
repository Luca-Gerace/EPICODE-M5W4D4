import { useContext } from 'react'
import './Welcome.css'
import Context from '../../modules/Context'

export default function Welcome() {

  const { user } = useContext(Context)

  return (
    <div className="w-100 hero text-white mb-4 d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome {user.name}</h1>
      <p className='fs-2 m-0'>Discover our Epibooks!</p>
    </div>
  )
}
