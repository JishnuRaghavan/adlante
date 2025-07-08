import React from 'react'

export default function FooterAdelante() {
  return (
    <div className='bg-sky-600 m-0 p-0 flex justify-between'>
      <div>firstColumn</div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-white m-2 p-2'>STAY IN THE KNOW!</h1>
        <p className='font-semibold text-white m-2 p-2'>Join our email list and be the first to know about new products launches, restocks, and promotions!</p>
        <div className='m-2 p-2 flex gap-3'>
          <input className='p-2' type="text" />
          <button className='p-1 border-2 rounded-lg text-white hover:text-black hover:border-black'>sign up</button>
        </div>
        <div className='m-2 p-2'>
          <h3 className='text-white font-semibold'>FOLLOW US</h3>
          <div>social</div>
        </div>
      </div>
    </div>
  )
}
