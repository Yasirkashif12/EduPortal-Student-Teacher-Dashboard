import React from 'react';
import { Link } from 'react-router-dom';

const TeacherFooter = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-indigo-600">Teacher Portal</h2>
            <p className="text-sm text-gray-600 mt-1 max-w-sm">
              A professional learning management space for teachers to manage classes, assignments, and student progress with ease.
            </p>
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h3 className="text-md font-semibold text-gray-800">Quick Links</h3>
            <Link to="/teacherhome" className="text-gray-600 hover:text-indigo-600 transition">
              Home
            </Link>
            <Link to="viewsubmission" className="text-gray-600 hover:text-indigo-600 transition">
              View Submissions
            </Link>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-md font-semibold text-gray-800">Contact</h3>
            <p className="text-gray-600 text-sm">support@teacherportal.com</p>
            <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Teacher Portal. All rights reserved.</p>
          <p>Made with ❤️ for educators.</p>
        </div>
      </div>
    </footer>
  );
};

export default TeacherFooter;
