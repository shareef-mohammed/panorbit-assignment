import React from 'react'
import { useNavigate } from 'react-router-dom'

const Users = ({ user }) => {
  
  const navigate = useNavigate();
  return (
    <div className=' flex border-b text-start w-[90%] mx-auto my-3 cursor-pointer' onClick={() => navigate(`/pages/${user?.id}`)} >
      <img className='my-2 rounded-full' src={user?.profilepicture} width={30} height={30} alt="profile image" />
      <p className='my-2 ml-4 text-slate-600'>{user?.name}</p>
    </div>
  )
}

export default Users