import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Provider } from "react-redux";
function Layout() {

  return (
    <div className='h-full'>
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout