import React from 'react'

const Master = () => {
  return (
      <div className=' pb-2'>
          
      <div className='flex justify-between p-2 '>
            <h1 className='font-bold text-xl'>Template Master</h1>
            <button className='text-white px-5 py-1 bg-red-600 rounded-xl'>+ Add</button>
          </div>
            <div>
            <select className='w-60 border border-gray-300 mx-4 rounded-lg pl-2 text-gray-300'>
                  <option value="">ID</option>
                  <option value="45698">45698</option>
                  <option value="45698">45698</option>
                  <option value="45698">45698</option>
                  <option value="45698">45698</option>
              </select>
              <input type="text" name="search" placeholder='Search' className='w-60 border border-gray-300 mx-4 rounded-lg pl-2 text-gray-300'></input>
              <input type="date" name="date" className='w-60 border border-gray-300 mx-4 rounded-lg pl-2 text-gray-300'></input>
              <button className='py-1 px-2 mr-4 bg-gray-200 rounded-lg'><i class="fa-solid fa-filter"></i></button>
              <button className='py-1 px-2 bg-gray-200 rounded-lg' ><i class="fa-solid fa-download"></i></button>
          </div>
          
    </div>
  )
}

export default Master
