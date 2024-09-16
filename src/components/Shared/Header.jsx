import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const navItems = [
    { name: "Home", route: "" },
    { name: "Dashboard", route: "dashboard" },
    { name: "Login", route: "login" },
    { name: "LogOut", route: "login" },
  ];
  return (
    <div className="sticky top-0 bg-white w-full flex justify-between lg:px-8 py-4 z-50 border-b-[1px] border-slate-100">
      <h3 className="text-xl lg:text-3xl">
        <span className="text-[#ce1212] rounded-lg px-2 font-semibold ">
          D O N O R
        </span>
      </h3>
      <div>
        {/* Hamburger Icon for mobile */}
        <button
          className="lg:hidden absolute flex items-center top-4 right-4 p-2 text-gray-600"
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
        <div className="flex gap-4 items-center">
          <ul
            className={`${
              isNavbarOpen ? "block" : "hidden"
            }  lg:flex flex flex-col lg:flex-row lg:static absolute top-[60px] right-0 z-50  py-2 lg:px-0 lg:py-0 rounded-lg bg-slate-200  lg:bg-transparent gap-2 lg:gap-8 items-start lg:items-center list-none text-lg hover:cursor-pointer`}
          >
            {navItems.map((item, index) => (
              <NavLink
                to={`/${item.route}`}
                key={index}
                className={`relative font-light border-b w-full lg:border-none px-4 lg:px-0 text-slate-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] lg:after:bg-[#ce1212] after:w-full after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100`}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          <div>
            <NavLink
              to="/signup"
              className=" bg-[#ce1212] hover:bg-red-700 text-white rounded-lg mr-16  lg:mr-0 py-2 px-2 "
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
