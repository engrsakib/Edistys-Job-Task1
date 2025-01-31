import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { GoSun } from "react-icons/go";
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { auth } from "../Firebase/firebase.congig";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";

import Loading from "./Loading";

const Header = () => {
  const { setdark, dark, user } = useContext(AuthContext);
  const [showUserMenu, setShowUserMenu] = useState(false); // State to handle user menu visibility
  // console.log(user)


  

  

  const handletheme = () => {
    setdark(!dark);
  };

  const links = (
    <>
      {["Solutions", "Services", "About Us",].map(
        (link, index) => (
          <NavLink
            key={index}
            to={`${link == "Solutions" ? "/": `/${link.toLowerCase().replace(" ", "")}`}`}
            className={({ isActive }) =>
              `px-4 py-2 rounded ${
                isActive
                  ? "bg-green-500 text-white"
                  : "bg-transparent hover:bg-red-400"
              } ${dark ? "text-gray-50" : "text-gray-800"}`
            }
          >
            {link}
          </NavLink>
        )
      )}
    </>
  );

  

  return (
    <div
      className={`navbar ${
        dark ? "bg-gray-900 text-gray-50" : "bg-[#0058C2] text-gray-100"
      } rounded-lg p-3 shadow-md`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow ${
              dark ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className={`text-2xl font-bold ${
            dark ? "text-red-400" : "text-red-800"
          }`}
        >
          <img src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Theme Toggle */}
        <button onClick={handletheme} className="btn btn-circle">
          {dark ? (
            <GoSun className="text-yellow-400 text-xl" />
          ) : (
            <FaMoon className="text-indigo-600 text-xl" />
          )}
        </button>

       
      </div>
    </div>
  );
};

export default Header;
