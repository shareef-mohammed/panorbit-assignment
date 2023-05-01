import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import Posts from './Posts'
import Gallery from './Gallery'
import Todo from './Todo'
import Chats from './Chats'

const Pages = () => {
    const [profile, setProfile] = useState(true)
    const [posts, setPosts] = useState(false)
    const [gallery, setGallery] = useState(false)
    const [todo, setTodo] = useState(false)
    const [open, setOpen] = useState(false)

    const setPage = (page) => {
        if(page === 'profile'){
            setProfile(true);
            setGallery(false);
            setPosts(false);
            setTodo(false);
        } else if(page === 'posts') {
            setProfile(false);
            setGallery(false);
            setPosts(true);
            setTodo(false);
        } else if(page === 'gallery') {
            setProfile(false);
            setGallery(true);
            setPosts(false);
            setTodo(false);
        } else {
            setProfile(false);
            setGallery(false);
            setPosts(false);
            setTodo(true);
        }        
    }
  return (
    <>
    <div className='flex w-full '>
        <Sidebar 
            profile={profile}
            posts={posts}
            gallery={gallery}
            todo={todo}
            setPage={setPage}            
        />
        {
            profile ? <Profile /> : posts ? <Posts /> : gallery ? <Gallery /> : <Todo />
        }
        
    </div>
    <Chats open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} />
    </>
  )
}

export default Pages