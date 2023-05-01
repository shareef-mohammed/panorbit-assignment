import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RightCornerUser from './RightCornerUser';

const Todo = () => {
  const [user, setUser] = useState({})
  const { id } = useParams();
  const state = useSelector((state) => state.users);
  useEffect(() => {
      setUser(state.find((one) => one.id === Number(id)))
  }, [])
return (
  <div className='w-[70%] h-full'>
      <div className='flex justify-between mt-16 border-b'>
          <p className='font-medium text-xl text-gray-700'>Posts</p>
          <RightCornerUser user={user} />
      </div>
      <div className='flex justify-center items-center h-[80%]'>
          <p className='text-[90px] font-extrabold text-gray-200'>Coming Soon</p>
      </div>
  </div>
)
}

export default Todo