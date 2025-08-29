import React, { useState } from "react";
import { useNavigate } from "react-router";

const TeacherHome = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleViewSubmissions = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("viewsubmission");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          Welcome to Teacher Panel
        </h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Manage your class activities with ease.  
          Review student submissions, assign grades,  
          and track academic performance — all in one place.
        </p>

        <button
          onClick={handleViewSubmissions}
          disabled={loading}
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "View Submissions"
          )}
        </button>
      </div>

      <p className="mt-8 text-gray-500 text-sm">
        Powered by EduPortal — Making education management simple & smart.
      </p>
    </div>
  );
};

export default TeacherHome;
