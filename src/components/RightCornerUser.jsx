import React, { useState } from 'react'
import ProfileCard from './ProfileCard'

const RightCornerUser = ({user}) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex pb-8 cursor-pointer' onClick={() => setOpen(true)}>
        <ProfileCard open={open} onClose={() => setOpen(false)} user={user} />
        <img className='w-8 h-8 rounded-full' src={user?.profilepicture} alt="Profile Picture" />
        <p className='pl-3 pt-1 font-normal text-gray-600'>{user?.name}</p>
    </div>
  )
}

export default RightCornerUser