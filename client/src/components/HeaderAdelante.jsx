import React from 'react'

export default function HeaderAdelante() {

  return (
    <header className='header flex my-4 justify-between bg-gray-100 shadow-2xl sticky top-4 z-10 transition-opacity trasition-[.5s ease-in-out]'>
      <div className='header-firstColumn justify-center items-center mx-4 flex'>
        <div>
          <img className='w-36' src='./src/adelante logo red.png' />
        </div>
      </div>
      <div className='header-secondColumn my-4 flex items-center  w-[100%] justify-center'>

        <nav className='bg-cyan-600 p-4 md:w-[60%] h-[70%] sm:w-[100%] rounded-lg flex justify-center text-gray-200'>
          <ul className='flex items-center w-[100%] justify-around font-bold'>
            <li className='hover:text-white hover:cursor-pointer '>Home</li>
            <li className='hover:text-white hover:cursor-pointer'>Shop</li>
            <li className='hover:text-white hover:cursor-pointer'>About</li>
            <li className='hover:text-white hover:cursor-pointer'>Contact</li>
          </ul>
        </nav>
      </div>
      <div className='header-thirdColumn mx-4 flex items-center'>
        <ul className='flex items-center gap-3'>
          <li>
            <img className='w-7' src="./assets/png/cart.png" alt="" />
          </li>
          <li>
            <img className='w-7' src="./assets/png/wishlist.png" alt="" />
          </li>
          <li>
            <img className='w-7' src="./assets/png/profile.png" alt="" />
          </li>
        </ul>
      </div>
    </header>
  )
}
