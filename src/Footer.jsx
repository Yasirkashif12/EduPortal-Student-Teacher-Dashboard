import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaClipboardList } from "react-icons/fa";

const Footer = () => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 transition ${
      isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-300"
    }`;

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-6 mt-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold tracking-wide">EduPortal</h2>
          <p className="text-sm text-gray-200">
            Empowering Students for a Brighter Future
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <NavLink to="/" className={linkClasses}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="todayassignement/:classId:/:subjectId" className={linkClasses}>
            <FaClipboardList /> Assignments
          </NavLink>
          <NavLink to="todayquizzes/:classId:/:subjectId" className={linkClasses}>
            <FaBook /> Quiz
          </NavLink>
        </div>

        <div className="text-center md:text-right text-xs text-gray-300">
          <p>&copy; {new Date().getFullYear()} EduPortal. All rights reserved.</p>
          <p>Designed with ❤️ by Yasir Kashif</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
