import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import Body from './Body'

const MainContainer = () => {
  return (
    <div className='flex'>
          <SideBar />
          <div className='w-screen'>
              <Header />
              <Body/>
          </div>
    </div>
  )
}

export default MainContainer
