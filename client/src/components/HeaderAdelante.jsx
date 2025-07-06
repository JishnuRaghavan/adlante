import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../pages/Cart';
import SideProfileBar from '../pages/SideProfileBar';

export default function HeaderAdelante() {

  const [cartVisible, setCartVisible] = useState(false);
  const [profileVisible,setProfileVisible]  = useState(false);
  const [wishlistVisible,setWishlistVisible]  = useState(false);

  const showCart = () => {
    setTimeout(() => {
      setCartVisible(!cartVisible);
    }, 500);
  }

  const showWishlist  = ()=>  {
    setTimeout(()=>{
      setWishlistVisible(!wishlistVisible);
    },500);
  }

  const showProfile = ()=>  {
    setTimeout(()=>{
      setProfileVisible(!profileVisible);
    },500);
  }

  return (
    <>
      <header className='header flex my-4 justify-between bg-gray-100 shadow-2xl sticky top-4 z-30 transition-opacity trasition-[.5s ease-in-out]'>
        <div className='header-firstColumn justify-center items-center mx-4 flex'>
          <div>
            <img className='w-36' src='./src/adelante logo red.png' />
          </div>
        </div>
        <div className='header-secondColumn my-4 flex items-center  w-[100%] justify-center'>

          <nav className='bg-cyan-600 p-4 md:w-[60%] h-[70%] sm:w-[100%] rounded-lg flex justify-center text-gray-200'>
            <ul className='flex items-center w-[100%] justify-around font-bold'>
              <li className='hover:text-white hover:cursor-pointer '>
                <Link to="/">Home</Link>
              </li>
              <li className='hover:text-white hover:cursor-pointer'>
                <Link to='/shop-page'>Shop</Link>
              </li>
              <li className='hover:text-white hover:cursor-pointer'>About</li>
              <li className='hover:text-white hover:cursor-pointer'>Contact</li>
            </ul>
          </nav>
        </div>
        <div className='header-thirdColumn mx-4 flex items-center'>
          <ul className='flex items-center gap-3'>
            <li>
              <img onClick={showCart} className='w-7' src="https://cdn-icons-png.flaticon.com/128/14034/14034633.png" alt="add to cart" />
            </li>
            <li>
              <img className='w-7' src="https://cdn-icons-png.flaticon.com/128/8815/8815853.png" alt="wish list" />
            </li>
            <li>
              <img onClick={showProfile} className='w-7' src="https://cdn-icons-png.flaticon.com/128/8791/8791434.png" alt="profile" />
            </li>
          </ul>
        </div>
      </header>
      {
        cartVisible && <Cart cartVisible={cartVisible} showCart={showCart} />
      }

      {
        profileVisible && <SideProfileBar setProfileVisible={setProfileVisible} />
      }
    </>
  )
}
