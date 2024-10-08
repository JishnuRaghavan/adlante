import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {

  const {currentUser} = useSelector((state)=>state.user)
  return (
    <nav className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold'>Adelante</h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>  
          </Link>
          <Link to='/profile'>
            {
              currentUser?(
                <img src={currentUser.profilePicture} alt='user image' className='h-7 w-7 rounded-full object-cover'/>
              ):(
                <li>sign-In</li>
              )
            }
          </Link>
        </ul>
      </div>
    </nav>
  )
}
