import  { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <NavLink to="./" className="flex items-center py-4 px-2">
              <span className="font-semibold text-white text-xl lg:text-2xl">
                D O N O R
              </span>
            </NavLink>
          </div>
          {/* middle section:desktop */}
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
              to="donor-list"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300"
            >
              Find Donor
            </NavLink>
          </div>
          {/* signup login section:desktop */}
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
              to="donor-list"
              className="py-4 px-2 text-white hover:text-red-200 transition duration-300 mr-4"
            >
              Find Donor
            </NavLink>
            
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <div className="relative w-6 h-6">
                <XMarkIcon
                  className={`absolute inset-0 h-6 w-6 text-white transition-all duration-900 ease-in-out ${
                    isOpen
                      ? "opacity-100 transform rotate-0 scale-100"
                      : "opacity-0 transform rotate-90 scale-50"
                  }`}
                />
                <Bars3Icon
                  className={`absolute inset-0 h-6 w-6 text-white transition-all duration-900 ease-in-out ${
                    isOpen
                      ? "opacity-0 transform rotate-90 scale-50"
                      : "opacity-100 transform rotate-0 scale-100"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <NavLink
          to="./"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="./about"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          About
        </NavLink>
        <NavLink
          to="./signup"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Sign Up
        </NavLink>
        <NavLink
          to="./login"
          className="block py-2 px-4 text-sm hover:bg-red-700 text-white"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
