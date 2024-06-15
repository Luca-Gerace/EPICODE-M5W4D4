import { useContext } from 'react';
import Context from '../../../modules/Context';

export default function UserTab() {

  const { user } = useContext(Context)

  return (
    <div className="d-flex me-3 border rounded-pill py-2 ps-2 pe-3 align-items-center">
      <img src="https://avatars.githubusercontent.com/u/66672394?v=4" alt="user img" className='userimg border rounded-circle' />
      <div className="userinfo d-flex flex-column ms-2">
        <span className='fw-bold'>{user.name}  <span className='d-none d-md-inline'>{user.surname}</span></span>
      </div>
    </div>
  )
}