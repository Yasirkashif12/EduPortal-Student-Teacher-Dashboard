import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-indigo-700 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-xl md:text-2xl font-extrabold tracking-wide cursor-pointer select-none">
          EduPortal
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/"
            className="hover:text-indigo-300 transition font-semibold text-sm md:text-base"
          >
            Home
          </Link>
          <Link
            to="/studentpage"
            className="hover:text-indigo-300 transition font-semibold text-sm md:text-base"
          >
            Classes
          </Link>
                    <Link
            to="viewresult"
            className="hover:text-indigo-300 transition font-semibold text-sm md:text-base"
          >
            View Result
          </Link>

          <Logout />
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-transform ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-opacity ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-600 px-6 py-3 flex flex-col space-y-4 text-sm">
          <Link
            to="/"
            className="hover:text-indigo-300 transition font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/studentpage"
            className="hover:text-indigo-300 transition font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Classes
          </Link>
                    <Link
            to="viewresult"
            className="hover:text-indigo-300 transition font-semibold"
            onClick={() => setIsOpen(false)}
          >
            View Result
          </Link>

          <div onClick={() => setIsOpen(false)}>
            <Logout />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
