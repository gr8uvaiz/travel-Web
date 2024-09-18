import React from 'react'
import { Footer, Navbar,MainHome } from './components'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
