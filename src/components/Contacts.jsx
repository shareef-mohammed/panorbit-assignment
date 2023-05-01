import React, { useState } from 'react'
import ChatBox from './ChatBox'

const Contacts = ({ user }) => {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex mt-2 cursor-pointer' onClick={() => setOpen(true)}>
        <img className='w-8 h-8 ml-3 rounded-full' src={user?.profilepicture} alt="Profile" />
        <p className='ml-2 mt-1 text-gray-700 font-light text-sm'>{user?.name}</p>
        <ChatBox open={open} onClose={() => setOpen(false)} user={user} />
        <span className='w-2 h-2 rounded-full bg-green-600 ml-auto mt-2'> </span>
    </div>
  )
}

export default Contacts