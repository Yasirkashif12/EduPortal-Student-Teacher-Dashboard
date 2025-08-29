import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import { Menu, X } from 'lucide-react'; 

const TeacherNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          <div className="flex items-center">
            <Link 
              to="/teacherhome" 
              className="text-2xl font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Teacher Portal
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/teacherhome" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link 
              to="viewsubmission" 
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors"
            >
              View Submissions
            </Link>
            <Logout />
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none transition"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link 
              to="/teacherhome" 
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-indigo-600 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/viewsubmission" 
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-indigo-600 font-medium"
            >
              View Submissions
            </Link>
            <div onClick={() => setMenuOpen(false)}>
              <Logout />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TeacherNavbar;
