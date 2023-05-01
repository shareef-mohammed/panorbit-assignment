import React, { useEffect, useState } from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Contacts from './Contacts'


const Chats = ({open, onClose, onOpen}) => {
    const [users, setUsers] = useState([])
    const { id } = useParams();
    const state = useSelector((state) => state.users);
    useEffect(() => {
        setUsers(state.filter((one) => one.id !== Number(id)))
    }, [])
  return (
    <div className={open ? 'absolute w-56 h-72 right-16 bottom-0 z-100 border-blue-700 shadow-2xl' : ' ml-auto w-56 h-12 mr-16  rounded-t-lg cursor-pointer'}>
        <div className={open ? 'flex justify-between text-white bg-blue-900 w-full rounded-t-lg h-12 cursor-pointer' : 'flex justify-between text-white bg-blue-900 w-full rounded-t-lg h-full'}>
            <div className='flex'>
                <FiMessageSquare className='ml-5 mt-4 w-6 h-6' />
                <p className='mt-3 ml-2'>Chats</p>
            </div>
            {!open ? <MdKeyboardArrowUp className='h-7 w-7 mr-3 mt-3 ' onClick={onOpen} /> 
            :
            <MdKeyboardArrowDown className='h-7 w-7 mr-3 mt-3 ' onClick={onClose} />}
        </div>
        {
            open && (
                <div className='bg-white mx-auto scrollbar-thin scrollbar-thumb-gray-400  overflow-y-scroll scrollbar-thumb-rounded-full '>
                    {
                        users?.map((user) => (
                            <Contacts user={user} key={user.id} />
                        ))
                    }
                </div>
            )           
        }
    </div>
  )
}

export default Chats