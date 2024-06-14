import './Welcome.css'

export default function Welcome({ user }) {
  return (
    <div className="w-100 hero text-white mb-4 d-flex flex-column justify-content-center align-items-center">
      <h1>Welcome {user}</h1>
      <p className='fs-2 m-0'>Discover our Epibooks!</p>
    </div>
  )
}
