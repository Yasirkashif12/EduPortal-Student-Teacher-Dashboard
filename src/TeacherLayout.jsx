import React from 'react'
import { useLocation } from 'react-router'
import { Outlet } from 'react-router'
import TeacherNavbar from './TeacherNavbar'
import TeacherFooter from './TeacherFooter'
const TeacherLayout = () => {
  const location=useLocation()
  const shownpage=location.pathname=='/teacherlogin'
  if(shownpage){
    return <Outlet/>
  }
  return (
    <div>
      <TeacherNavbar/>
      <Outlet/>
      <TeacherFooter/>
    </div>
  )
}

export default TeacherLayout
