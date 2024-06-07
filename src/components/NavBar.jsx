import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false); // Close menu after selection on mobile
  };

  return createPortal(
    <>
      <nav className="flex py-4 px-2 text-black justify-between w-full h-1/6 bg-gradient-to-r from-pink-200 via-blue-100 to-blue-200
">
        <h2 className="text-black text-xl">Pranay Netha Guda</h2>
        <div className="md:hidden">
          <button className="relative group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${isMenuOpen ? 'translate-x-1.5' : ''}`}>
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? 'rotate-[42deg] w-2/3 delay-150' : ''}`}></div>
                <div className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${isMenuOpen ? 'translate-x-10' : ''}`}></div>
                <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${isMenuOpen ? '-rotate-[42deg] w-2/3 delay-150' : ''}`}></div>
              </div>
            </div>
          </button>
        </div>
        <ul className="hidden md:flex flex-row justify-end px-5 gap-7">
          <li>
            <NavLink end className={({ isActive }) => (isActive ? 'text-orange-500 ' : '') + 'text-xl font-bold'} to="">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500 ' : '') + 'text-xl font-bold'} to="project">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500 ' : '') + 'text-xl font-bold'} to="contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500 ' : '') + 'text-xl font-bold'} to="resume">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-orange-500 ' : '') + 'text-xl font-bold'} to="myphotography">
              My Photography
            </NavLink>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col text-xl gap-2 bg-indigo-300">
            <li className='rounded-lg px-4 text-xl lg:text-3xl font-bold font-mono py-3 hover:px-8 text-gray-800'>
              <button onClick={handleClick}>
                <NavLink end={true} className={({ isActive }) => isActive ? 'text-orange-500' : ''} to="">
                  About Me
                </NavLink>
              </button>
            </li>
            <li className='rounded-lg px-4 text-xl lg:text-3xl font-bold font-mono py-3 hover:px-8 text-gray-800'>
              <button onClick={handleClick}>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to="project">
                  Projects
                </NavLink>
              </button>
            </li>
            <li className='rounded-lg px-4 text-xl lg:text-3xl font-bold font-mono py-3 hover:px-8 text-gray-800'>
              <button onClick={handleClick}>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to="contact">
                  Contact
                </NavLink>
              </button>
            </li>
            <li className='rounded-lg px-4 text-xl lg:text-3xl font-bold font-mono py-3 hover:px-8 text-gray-800'>
              <button onClick={handleClick}>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to="resume">
                  Resume
                </NavLink>
              </button>
            </li>
            <li className='rounded-lg px-4 text-xl lg:text-3xl font-bold font-mono py-3 hover:px-8 text-gray-800'>
              <button onClick={handleClick}>
                <NavLink className={({ isActive }) => isActive ? 'text-orange-500' : ''} to="myphotography">
                  My Photography
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      )}
    </>,
    document.getElementById('navBar')
  );
}
