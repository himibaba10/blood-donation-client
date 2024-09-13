import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const navItems = ['Home','Dashboard','Login','Signup']
  return (
    <div className="relative flex justify-between p-4 shadow-lg ">
      <h3 className="text-xl lg:text-3xl">
        <span className="bg-slate-300 rounded-lg px-2 py-1 ">SaveABeat</span>
      </h3>
      <div>
        {/* Hamburger Icon for mobile */}
        <button
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-600"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {/* Nav items */}
        <ul
          className={`${
            isNavbarOpen ? "block" : "hidden"
          }  lg:flex flex flex-col lg:flex-row lg:static absolute top-16 right-0 z-50 px-4 py-2 lg:px-0 lg:py-0 rounded-lg bg-slate-200 lg:bg-transparent gap-8 items-start lg:items-center list-none text-lg hover:cursor-pointer`}
        >
          {navItems.map((item, index) => (
            <NavLink
              to={`/${item.toLowerCase()}`}
              key={index}
              className={({ isActive }) =>
                `hover:text-red-600 font-semibold ${
                  isActive
                    ? "text-red-600 lg:underline underline-offset-8 decoration-2 decoration-red-600"
                    : ""
                } `
              }
            >
              {item}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
