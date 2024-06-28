import React from 'react'

const Header = () => {
  return (
      <div className='shadow-lg h-16 bg-white w-full grid-cols-8 flex items-center justify-between p-4'>
          <span></span>
          <div className='flex justify-center'>
            <input type="text" name="search" className='w-96 border  p-2 text-gray-300 rounded-l-3xl' placeholder='Search Template ' ></input>
            <button className='border border-gray-300 rounded-r-3xl px-4 py-2 '><i class="fas fa-search"></i></button>
          </div>
          <div>
            <i class="fa-solid fa-bell pr-7 text-xl"></i>
            <i className="fa-solid fa-circle-user text-2xl"></i>
          </div>
    </div>
  )
}

export default Header
