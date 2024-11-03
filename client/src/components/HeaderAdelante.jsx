import React from 'react'

export default function HeaderAdelante() {
  return (
    <div className='flex my-4 py-4 justify-between bg-gray-100 shadow-xl '>
      <div className='header-firstColumn justify-center items-center mx-4'>
        <div>
          <img className='w-28' src='./src/adelante logo red.png' />
        </div>
      </div>
      <div className='header-secondColumn flex items-center  w-[100%] justify-center'>
        
        <nav className='bg-red-600 p-4 w-[60%] h-[70%] rounded-lg flex justify-center text-gray-200'>
          <ul className='flex items-center w-[100%] justify-around font-bold'>
            <li className='hover:text-white hover:cursor-pointer '>Homepage</li>
            <li className='hover:text-white hover:cursor-pointer'>Shop</li>
            <li className='hover:text-white hover:cursor-pointer'>About Us</li>
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
    </div>
  )
}
