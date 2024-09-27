import  { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NavLink to="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-white text-lg">
                  BloodDonor
                </span>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="./"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink
              to="./about"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300"
            >
              About
            </NavLink>
            <NavLink
              to="donor_list"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300"
            >
              Find Donor
            </NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <NavLink
              to="signup"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="login"
              className="py-2 px-2 font-medium text-white bg-red-700 rounded hover:bg-red-800 transition duration-300"
            >
              Login
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <NavLink
              to="#"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300 mr-4"
            >
              Find Donor
            </NavLink>
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a
          to="#"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Home
        </a>
        <a
          to="#"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          About
        </a>
        <a
          to="#"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Sign Up
        </a>
        <a
          to="#"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
