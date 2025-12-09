import React, { useState } from 'react';
import NavLink from './NavLink';
import logo from '../assets/logo.svg'; // Adjust if your path is different
import icon from '../assets/icon.svg'; // Adjust if your path is different
const navLinks = [
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white text-black p-4 sticky top-0 z-10">
      <div className=" mx-auto">
        {/* Logo + Hamburger (Mobile) */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Icon (left - mobile) */}
          <a href="/"><img src={icon} alt="Site icon" className="h-8" /></a>

          {/* Hamburger (right) */}
          {/* <button
            className="focus:outline-none cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="#3f3bde" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>

        {/* Logo + Navigation (Large screens) */}
        <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto">
          {/* Logo (left) */}
          <a href="/"><img src={logo} alt="Logo" className="h-12" /></a>
          

          {/* Navigation (right) */}
          <nav className="flex space-x-16 text-lg">
            {navLinks.map((link) => (
              <NavLink key={link.name} name={link.name} path={link.path} />
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`
            ${isOpen ? 'block' : 'hidden'} 
            mt-4 
            lg:hidden
            text-lg
          `}
        >
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} path={link.path} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
// Add sticky class to the header
