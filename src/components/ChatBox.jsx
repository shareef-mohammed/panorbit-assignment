import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const ChatBox = ({ open, onClose, user }) => {
    if(!open) return null;
  return (
    <div className='absolute w-56 h-72 right-80 bottom-0 z-30 border-blue-700 shadow-2xl' >
        <div className='flex justify-between text-white bg-blue-900 w-full rounded-t-lg h-12 cursor-pointer'>
            <div className='flex items-center'>
                <img className='w-6 h-6 rounded-full ml-3' src={user?.profilepicture} alt="profile" />
                <p className='ml-2'>{user?.name}</p>
            </div>            
            <MdKeyboardArrowDown className='h-7 w-7 mr-3 mt-3 ' onClick={onClose} />
        </div>
        <div className='flex items-center justify-center bg-white mx-auto h-full rounded-b-lg scrollbar-thin scrollbar-thumb-gray-400  overflow-y-scroll scrollbar-thumb-rounded-full '>
            <p className='text-gray-500'>Messages will shown here.</p>
        </div>
    </div>
  )
}

export default ChatBox