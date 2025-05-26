import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoEarth } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center justify-center space-x-2">
        <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          <IoEarth className='w-8 h-8' />
        </div>
        <span className="text-xl font-bold text-blue-800">ASK SPHERE</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
            }
          >
            Questions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tags"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
            }
          >
            Tags
          </NavLink>
        </li>
      </ul>

      {/* Auth NavLinks */}
      <div className="space-x-3 ">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? 'px-4 pb-1 border border-blue-500 rounded-md bg-blue-100 text-blue-700'
              : 'px-4 pb-1 border border-gray-300 rounded-md hover:bg-gray-100'
          }
        >
          Sign Up
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? 'px-4 pb-1 border border-blue-500 rounded-md bg-blue-100 text-blue-700'
              : 'px-4 pb-1 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200'
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
