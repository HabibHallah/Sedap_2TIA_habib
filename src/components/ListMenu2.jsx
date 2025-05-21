import { BiUserCircle, BiHome } from "react-icons/bi";
import { MdOutlinePeopleAlt, MdOutlineReorder } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex items-center rounded-xl p-2 px-4 transition-all duration-200 space-x-2
     ${isActive ? "text-gray-800 bg-pink-200" : "text-gray-600 hover:text-gray-800 hover:bg-pink-100"}`;

  const dropdownItemClass = "block px-4 py-2 text-sm text-gray-600 hover:bg-pink-100";

  return (
    <div id="sidebar-menu" className="mt-10">
      <div className="flex items-center justify-between mr-30">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800  md:text-4xl text-[30px] mr-20">
          Sedap<span className="text-pink-500">.</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium items-center relative">
          {/* Dropdown HOME */}
          <li className="group relative">
            <button className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 text-white font-medium shadow">
              Home <span className="ml-1">▼</span>
            </button>
            {/* Dropdown menu - Tambah padding atas dan margin negatif */}
            <div className="absolute top-full left-0 w-40 bg-white rounded-lg shadow-lg hidden group-hover:block z-50 pt-2 -mt-1">
              <NavLink to="/" className={dropdownItemClass}>Dashboard</NavLink>
              <NavLink to="/about" className={dropdownItemClass}>About</NavLink>
              <NavLink to="/Topproduct" className={dropdownItemClass}>Top Product</NavLink>
              <NavLink to="/Testimoni" className={dropdownItemClass}>Testimoni</NavLink>
            </div>
          </li>

          {/* Other Menus */}
          <li>
            <NavLink to="/" className={menuClass}>
              <BiHome className="hover:text-pink-500" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={menuClass}>
              <MdOutlinePeopleAlt className="hover:text-pink-500" /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Topproduct" className={menuClass}>
              <MdOutlineReorder className="hover:text-pink-500" /> Top Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/Testimoni" className={menuClass}>
              <MdOutlinePeopleAlt className="hover:text-pink-500" /> Testimoni
            </NavLink>
          </li>

          {/* Search & Login */}
          <li className="flex items-center space-x-4 text-pink-500 text-xl">
            <button>🔍</button>
            <NavLink 
              to="/login" 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium shadow-md hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:shadow-lg"
            >
              <BiUserCircle className="text-lg" />
              <span>Login</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
