import React from 'react'

export default function HeaderAdelante() {
  return (
    <div className='header-adelante'>
      <div className='header-firstColumn'>
        <div>
          <img src='./src/adelante logo red.png' />
        </div>
      </div>
      <div className='header-secondColumn'>
        
        <nav className='header-nav'>
          <ul>
            <li>Homepage</li>
            <li>Shop</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div className='header-thirdColumn'>
        <ul>
          <li>
            <img src="./assets/png/cart.png" alt="" />
          </li>
          <li>
            <img src="./assets/png/wishlist.png" alt="" />
          </li>
          <li>
            <img src="./assets/png/profile.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}
