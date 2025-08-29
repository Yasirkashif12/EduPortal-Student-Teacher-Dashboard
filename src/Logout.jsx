import React, { useContext } from 'react'
import { auth } from './firebase'
import { signOut } from 'firebase/auth'
import { AuthGiver } from './AuthProvider'
import { useNavigate } from 'react-router'
const Logout = () => {
    const {user}=useContext(AuthGiver)
const navigate=useNavigate()
    if(!user){
        return <h2>User Doesnot Exist</h2>
    }
const onhandle = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem("isTeacherLoggedIn")
    sessionStorage.removeItem("isAdminLoggedIn")
    navigate('/studentlogin');
  } catch (err) {
    alert(err.message);
  }
};
  return (
    <div>
      <button onClick={onhandle}>Logout</button>
    </div>
  )
}

export default Logout
