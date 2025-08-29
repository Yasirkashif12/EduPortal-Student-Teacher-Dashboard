import React from 'react'
import { useLoaderData, useLocation } from 'react-router'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Footer from './Footer'
const StudentLayout = () => {
    const location=useLocation()
    const shownpage=location.pathname=='/studentLogin'||location.pathname=='/studentsignup'
    if(shownpage){
        return <Outlet/>
    }
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default StudentLayout
