import React from 'react'

const Sidebar = ({profile, posts, gallery, todo, setPage}) => {
  return (
    <div className='h-[750px] w-[25%] flex justify-center items-center'>
        <div className='w-64 rounded-3xl h-[650px] bg-gradient-to-b from-[#6366f1] to-[#7e22ce] flex justify-center items-center'>
            <div className='w-44 font-medium '>
                <p 
                    className={profile ? 'py-3 text-white border-b border-slate-400 cursor-pointer' : 'cursor-pointer py-3 text-slate-400 border-b border-slate-400'}
                    onClick={() => setPage('profile')}
                >Profile</p>
                <p 
                    className={posts ? 'cursor-pointer py-3 text-white border-b border-slate-400' : 'cursor-pointer py-3 text-slate-400 border-b border-slate-400'}
                    onClick={() => setPage('posts')}
                >Posts</p>
                <p 
                    className={gallery ? 'cursor-pointer py-3 text-white border-b border-slate-400' : 'cursor-pointer py-3 text-slate-400 border-b border-slate-400'}
                    onClick={() => setPage('gallery')}
                >Gallery</p>
                <p 
                    className={todo ? 'cursor-pointer py-3 text-white border-b border-slate-400' : 'cursor-pointer py-3 text-slate-400 border-b border-slate-400'}
                    onClick={() => setPage('todo')}
                >ToDo</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar