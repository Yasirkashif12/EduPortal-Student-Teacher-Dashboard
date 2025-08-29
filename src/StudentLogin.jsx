import React, { useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import LoadingSpinner from './LoadingSpinner';

const StudentLogin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true); 
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success('Login Successful');

      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6">
      {loading ? (
        <div className="flex justify-center items-center w-full">
          <LoadingSpinner />
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-lg rounded-xl px-6 sm:px-10 py-8 w-full max-w-md space-y-6 border border-gray-200"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
            Student Login
          </h2>
          <p className="text-sm text-center text-gray-500">
            Sign in with your registered credentials.
          </p>

          <div>
            <input
              {...register("email", {
                required: "Enter your Email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email"
                }
              })}
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="relative">
            <input
              {...register("password", { required: "Please enter your password" })}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
              aria-label="Password"
            />

            <button
              type="button"                       
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
          >
            Login
          </button>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4 text-sm">
            <Link
              to="/teacherlogin"
              className="text-blue-600 hover:underline"
            >
              Teacher Portal
            </Link>
            <Link
              to="/studentsignup"
              className="text-blue-600 hover:underline"
            >
              Student Registration
            </Link>
            <Link
              to="/adminlogin"
              className="text-blue-600 hover:underline"
            >
              Admin Access
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default StudentLogin;
