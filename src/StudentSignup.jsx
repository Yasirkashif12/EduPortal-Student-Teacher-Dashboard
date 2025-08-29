import React, { useState } from 'react'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import LoadingSpinner from './LoadingSpinner'

const StudentSignup = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      setLoading(true) 
      const credentials = await createUserWithEmailAndPassword(auth, data.email, data.password)
      await updateProfile(credentials.user, { displayName: data.name })
      await auth.currentUser.reload()

      localStorage.setItem("studentName", data.name)
      localStorage.setItem("studentUid", credentials.user.uid)

      toast.success("Account Created Successfully")
      alert("Account Created Successfully")

      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      setLoading(false)
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already used")
        alert("Email already used")
      } else {
        toast.error(error.message)
      }
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 sm:px-6">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl px-6 sm:px-10 py-8 w-full max-w-md space-y-5 transform hover:scale-[1.01] transition duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-blue-700 flex items-center justify-center gap-2">
          🎓 Student Signup
        </h2>
        <p className="text-xs sm:text-sm text-center text-gray-500">
          Join the learning community today!
        </p>

        <input
          {...register("name", { required: "Please Enter Your Name" })}
          type="text"
          placeholder="👤 Full Name"
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && <p className="text-red-500 text-xs sm:text-sm">{errors.name.message}</p>}

        <input
          {...register("email", {
            required: "Enter your Email",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email"
            }
          })}
          type="email"
          placeholder="📧 Email Address"
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && <p className="text-red-500 text-xs sm:text-sm">{errors.email.message}</p>}

        <div className="relative">
          <input
            {...register("password", {
              required: "Please Enter your Password",
              minLength: { value: 6, message: "Please enter at least 6 characters" }
            })}
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs sm:text-sm">{errors.password.message}</p>}

        <div className="relative">
          <input
            {...register("confirm", {
              required: "Please confirm your Password",
              validate: (value) => value === watch("password") || "Passwords do not match"
            })}
            type={showConfirmPassword ? "text" : "password"}
            placeholder="🔑 Confirm Password"
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showConfirmPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>
        </div>
        {errors.confirm && <p className="text-red-500 text-xs sm:text-sm">{errors.confirm.message}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold p-3 sm:p-4 rounded-full shadow-md transition"
        >
          🚀 Create Account
        </button>

        <p className="text-xs sm:text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to="/studentLogin" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default StudentSignup
