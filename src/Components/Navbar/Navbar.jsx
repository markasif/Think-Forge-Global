import React, { useState } from "react";
import logo from "../Assets/forge.webp";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 shadow-md transition-all duration-300 font-sh-ad-grotesk"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar Content */}
      <div className="relative flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#hero">

        <div className="flex items-center z-30">
          <img src={logo} alt="Think Forge Global" className="h-14 w-auto" />
        </div>
                </a>


        {/* Hamburger (Mobile) */}
        <div className="md:hidden z-30">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium z-30">
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#services" className="hover:text-red-500 transition">Services</a>
          <a href="#team" className="hover:text-red-500 transition">Our Team</a>
          <a href="#connect">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-4 flex flex-col font-medium z-20 relative bg-white bg-opacity-95 backdrop-blur-xl rounded-b-xl shadow">
          <a href="#about" className="hover:text-red-500 transition" onClick={toggleMenu}>About</a>
          <a href="#services" className="hover:text-red-500 transition" onClick={toggleMenu}>Services</a>
          <a href="#team" className="hover:text-red-500 transition" onClick={toggleMenu}>Our Team</a>
          <a href="#connect" onClick={toggleMenu}>
            <button className="bg-black text-white w-full px-4 py-2 rounded hover:bg-gray-900 transition duration-300">
              Contact Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}
