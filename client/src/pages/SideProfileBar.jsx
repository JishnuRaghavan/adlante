import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../redux/user/userSlice';

export default function SideProfileBar({ setProfileVisible,profileVisible }) {
  const profileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // ✅ Close on click outside or on scroll
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileVisible(false);
      }
    }

    function handleScroll() {
      setProfileVisible(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('wheel', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('wheel', handleScroll);
    };
  }, [setProfileVisible]);

  // ✅ Sign Out Handler
  const handleSignOut = async () => {
    try {
      await fetch('/api/auth/signout');
      dispatch(signOut());
      setProfileVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{

    if(!profileVisible) return;

    const timeOut = setTimeout(()=>{
      console.log('changing');
      setProfileVisible(false);
    },2000);

    return ()=>{
      clearTimeout(timeOut);
    }
  },[profileVisible]);

  const handleProfileSidebar = () => {
    setProfileVisible(false);
  };

  return (
    <div className="fixed top-28 right-0 z-50 flex justify-end bg-transparent">
      <div
        className="w-auto bg-slate-50 mr-3 p-2 h-auto transition-all duration-500 ease-in-out rounded-xl shadow-lg"
        ref={profileRef}
      >
        <div className="flex justify-center p-2">
          <span className="text-lg font-semibold">
            {currentUser ? `Hello ${currentUser.username}` : 'Hello Guest'}
          </span>
        </div>
        {currentUser && (
          <div className="flex justify-center m-2">
            <Link
              onClick={handleProfileSidebar}
              to={'/profile'}
              className="p-2 w-36 text-center bg-blue-100 rounded hover:bg-blue-200 transition"
            >
              Profile
            </Link>
          </div>
        )}
        <div className="flex justify-center m-2">
          {currentUser ? (
            <button
              onClick={handleSignOut}
              className="p-2 w-36 text-center bg-red-100 rounded hover:bg-red-200 transition"
            >
              Sign Out
            </button>
          ) : (
            <Link
              to={'/sign-in'}
              className="p-2 bg-green-100 rounded hover:bg-green-200 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
