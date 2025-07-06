import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

export default function SideProfileBar({setProfileVisible}) {

  const profileRef  = useRef(null);

  useEffect(()=>{

    function handleClickOutside(event){
      if(profileRef.current && !profileRef.current.contains(event.target)){
        setProfileVisible(false);
      }
    }

    function handleScroll(){
      setProfileVisible(false);
    }

    document.addEventListener('mousedown',handleClickOutside);
    window.addEventListener('wheel',handleScroll);

    return ()=>{
      document.removeEventListener('mousedown',handleClickOutside);
      window.removeEventListener('wheel',handleScroll);
    }
  },[setProfileVisible])


  return (
    <div className='sticky top-28 h-[50vh] bg-transparent z-50 inset-0 flex justify-end' >
      <div className='w-[30vw] bg-green-300 h-full mr-3' ref={profileRef}>
        <div className='flex justify-center p-2'>
          <font>hello guest</font>
        </div>
        <div className='flex justify-center p-2'>
          <Link to={'/sign-in'}>
            <button className='p-2 border-2 border-black rounded-md'>signin</button>   
          </Link>
        </div>
      </div>
    </div>
  )
}
