import React from 'react'
import { Link } from 'react-router'
const StudentNavbar = () => {
  return (
    <div>
      <Link to='/studentsignuo'>Signup</Link>
      <Link to='/studentlogin'>Login</Link>
    </div>
  )
}

export default StudentNavbar
