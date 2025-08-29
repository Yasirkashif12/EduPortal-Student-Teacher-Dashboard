import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import LoadingSpinner from './LoadingSpinner'

const TeacherLogin = () => {
  const navigate = useNavigate()
  const username = "teacher@gmail.com"
  const password = "teacher123@"

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        if (data.email === username && data.password === password) {
          sessionStorage.setItem("isTeacherLoggedIn", "true")
          toast.success("Welcome back, Teacher! 👨‍🏫")
          navigate('/teacherhome')
        } else {
          toast.error("Invalid email or password")
          alert("Invalid email or password")
        }
      }, 3000) 
    } catch (err) {
      setLoading(false)
      toast.error(err.message)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white shadow-lg rounded-2xl px-8 sm:px-12 py-10 w-full max-w-md space-y-6 border border-gray-200"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 drop-shadow-md">
          👨‍🏫 Teacher Login
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-500">
          Sign in to access your teaching dashboard.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            {...register("email", {
              required: "Enter your Email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email"
              }
            })}
            type="email"
            placeholder="teacher@example.com"
            className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            {...register("password", { required: "Please enter your password" })}
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-3 sm:p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold p-3 sm:p-4 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-300"
        >
          🚀 Login as Teacher
        </button>
      </form>
    </div>
  )
}

export default TeacherLogin
