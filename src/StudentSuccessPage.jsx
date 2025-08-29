import React from 'react';

const StudentSuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 text-center border border-green-300">
        <svg
          className="mx-auto mb-6 w-16 h-16 text-green-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <h1 className="text-2xl font-bold text-green-800 mb-2">
          🎉 Success!
        </h1>
        <p className="text-green-700 text-lg">
          Your answer was submitted successfully.
        </p>
      </div>
    </div>
  );
};

export default StudentSuccessPage;
