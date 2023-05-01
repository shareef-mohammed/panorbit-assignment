import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import Wave from 'react-wavify'
import Users from './Users'
import { addUser } from '../actions/userActions'

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://panorbit.in/api/users.json')
      .then((res) => {
        dispatch(addUser(res.data.users))
        setUsers(res.data.users)
      })
  }, [])
  return (
    <div className='bg-gradient-to-b from-[#6366f1] to-[#c084fc] h-[500px]'>    
    
    <Wave className='absolute bottom-[-50%] h-[100%] z-10' fill='white'
        paused={true}
        options={{
          height: 20,
          amplitude: 250,
          speed: 0.15,
          points: 3
        }}        
    />
    <Wave className='absolute bottom-0 h-[50%]' fill='#e0e7ff'
        paused={true}
        options={{
          height:4,
          amplitude: 250,
          speed: 0.15,
          points: 3
        }}
        
    />
    <div 
      className='absolute top-40 bottom-0 left-0 right-0 mx-auto w-[40%] h-[70%] rounded-2xl bg-white shadow-xl z-20 text-center '
    >
        <p className='text-xl rounded-t-2xl font-medium text-slate-500 w-full h-28 bg-slate-100 pt-10'>Select an account</p>
        
        <div className='h-[70%] rounded-2xl scrollbar-thin scrollbar-thumb-gray-400  overflow-y-scroll scrollbar-thumb-rounded-full '>
        {
          users.map((user) => (
            <Users user={user} key={user?.id} />
          ))
        }
        </div>
    </div>
    </div>
  )
}

export default Dashboard