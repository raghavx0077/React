import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col w-full  bg-gradient-to-r from-gray-900 via-purple-800 to-black text-white ">
      {/* Top Navbar */}
      <nav className="w-full bg-gray-900 text-white shadow-lg py-4 px-8 flex justify-around items-center ">
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/home"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
              aria-label="Navigate to Home Page"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
              aria-label="Navigate to About Page"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/Education"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
              aria-label="Navigate to Education Page"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              to="/Project"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
              aria-label="Navigate to Projects Page"
            >
              PROJECT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold hover:text-blue-400 transition-colors duration-300"
              aria-label="Navigate to Contact Page"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
