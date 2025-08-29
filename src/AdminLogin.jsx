import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

const AdminLogin = () => {
  const navigate = useNavigate()
  const username = "admin@gmail.com"
  const password = "admin123"

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      if (data.email === username && data.password === password) {
        sessionStorage.setItem("isAdminLoggedIn", "true")
        toast.success("Welcome back, Admin! 🛡️")
        navigate('/adminhome')
      } else {
        toast.error("Invalid email or password")
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl px-8 sm:px-12 py-10 w-full max-w-md space-y-6 overflow-hidden"
      >
        <div className="absolute -top-14 -left-14 w-48 h-48 bg-red-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-14 -right-14 w-48 h-48 bg-orange-500/30 rounded-full blur-3xl animate-pulse"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text tracking-wide">
          🛡️ Admin Login
        </h2>
        <p className="text-sm sm:text-base text-center text-gray-300 font-light">
          Secure access to the admin control panel.
        </p>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Email</label>
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
            className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.email && (
            <p className="text-orange-300 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm text-gray-200 mb-1">Password</label>
          <input
            {...register("password", { required: "Please enter your password" })}
            type="password"
            placeholder="🔒 Password"
            className="w-full p-3 sm:p-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {errors.password && (
            <p className="text-orange-300 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold p-3 sm:p-4 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300"
        >
          🚀 Login as Admin
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
