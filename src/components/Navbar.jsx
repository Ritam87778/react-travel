import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="/" className="text-white text-2xl font-normal tracking-wider  ">
          Adventure
        </a>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          }  md:flex md:items-center md:w-auto w-full`}
          id="mobile-menu"
        >
          <ul className="flex flex-col md:flex-row md:items-center md:justify-end text-base text-gray-300 md:space-x-4 space-y-2 md:space-y-0">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Services
              </a>
            </li>
            <li>
             <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Contact
              </a>
            </li> 
            <li>
             <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Sign up
              </a>
            </li> 
            <li>
             <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded md:border-0 md:hover:bg-transparent md:hover:text-white md:p-0"
              >
                Sign in
              </a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

