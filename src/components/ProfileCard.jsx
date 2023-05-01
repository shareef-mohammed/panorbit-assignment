import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ open, onClose, user }) => {
  const navigate = useNavigate()
    if(!open) return null;
  return (
    <div className='absolute top-28 right-16 w-72 h-96 rounded-3xl bg-white shadow-2xl border text-center' >
        <AiOutlineClose className='ml-auto mr-5 mt-5 w-5 h-5 cursor-pointer' onClick={onClose} />
        <img className='w-24 rounded-full h-24 mx-auto mt-2' src={user?.profilepicture} alt="" />
        <p className='mt-3 font-normal text-gray-600'>{user?.name}</p>
        <p className='mt-1 font-normal text-gray-400'>{user?.email}</p>
        <div className='flex justify-center border-t mt-3 w-48 mx-auto'>
            <img className='w-8 h-8 mt-2 rounded-full' src={user?.profilepicture} alt="Profile Picture" />
            <p className='pl-3 pt-1 mt-2 font-normal text-gray-600'>{user?.name}</p>
        </div>
        <div className='flex justify-center border-t mt-3 w-48 mx-auto'>
            <img className='w-8 h-8 mt-2 rounded-full' src={user?.profilepicture} alt="Profile Picture" />
            <p className='pl-3 pt-1 mt-2 font-normal text-gray-600'>{user?.name}</p>
        </div>
        <button className='bg-red-500 text-white text-lg font-medium mt-3 rounded-3xl px-3 py-1'onClick={() => navigate('/')}>Sign out</button>
    </div>
  )
}

export default ProfileCard