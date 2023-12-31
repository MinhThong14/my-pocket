import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../services/auth';

function Navbar() {
  return (
    <nav className="sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 bg-white">
          <Link
            to="/"
            className="flex items-center justify-center sm:justify-start group"
          >
            <div className="flex-shrink-0 flex items-center">
              <img className="block h-10 w-auto" src="logo.png" alt="ServeU" />
            </div>
            <div className="flex ml-2 sm:ml-4 items-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-black">
                My
                <span className="text-blue-500 group-hover:text-blue-700">
                  Pocket
                </span>
              </h1>
            </div>
          </Link>
          <div className="items-stretch">
            {isLoggedIn() ? (
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-black hover:text-red-600 px-5 py-3 text-xs font-semibold"
                >
                  FILES
                </Link>
                <Link
                  to="/upload"
                  className="text-white bg-blue-500 hover:bg-blue-500 hover:text-white px-5 py-3 text-xs font-semibold tracking-widest rounded-br-lg"
                >
                  UPLOAD
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className="text-white bg-blue-500 hover:bg-blue-700 hover:text-white px-5 py-3 text-xs font-semibold tracking-widest rounded-br-lg"
              >
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
