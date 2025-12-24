import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import SearchBar from './SearchBar'

const RootLayout = () => {
  return (
    <div className='w-full flex flex-col px-28 py-4'>
        <NavBar/>
        <SearchBar/>
        <main className=''><Outlet/></main>
        <Footer/>
    
      
    </div>
  )
}

export default RootLayout
