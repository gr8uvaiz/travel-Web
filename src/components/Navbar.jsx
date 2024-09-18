import React, { useState } from "react";
import { FaPlaneDeparture, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "DESTINATIONS", href: "/" },
    { name: "OUR CARS", href: "/cars" },
    { name: "ABOUT", href: "/" },
    { name: "CONTACT", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-zinc-50 p-4 font-sans">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center cursor-pointer flex-shrink-0 text-zinc-800 mr-6"
          >
            <FaPlaneDeparture className="h-8 w-8 mr-2 text-blue-800 transition-all duration-300 ease-in-out hover:scale-110" />
            <span className="font-light text-xl tracking-tight font-poppins">
              Indian Tour & Travels
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-800 px-3 py-2 rounded-md text-sm font-semibold  hover:text-zinc-800 transition-all duration-300 ease-in-out hover:scale-110 font-roboto"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-800 hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 transition-all duration-300 ease-in-out"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <CiMenuFries className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`z-50 fixed top-0 left-0 w-64 h-full bg-zinc-50 overflow-auto transition-all duration-500 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            onClick={() => navigate("/")}
            className="flex items-center p-6 cursor-pointer flex-shrink-0 text-zinc-800 mr-6"
          >
            <FaPlaneDeparture className="h-8 w-8 mr-2 text-blue-800 transition-all duration-300 ease-in-out hover:scale-110" />
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-800 hover:text-zinc-800 block px-3 py-2 rounded-md text-base font-semibold transition-all duration-300 ease-in-out hover:pl-6 font-roboto"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
