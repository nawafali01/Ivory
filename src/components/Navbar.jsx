import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-black py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo - Left */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src="https://via.placeholder.com/40" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded" />
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>

        {/* Navigation - Center */}
        <ul className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto flex-col md:flex-row list-none gap-4 md:gap-6 lg:gap-8 bg-black md:bg-transparent p-4 md:p-0 w-full md:w-auto`}>
          <li><Link to="/" className="text-white hover:text-green-500 text-sm sm:text-base" onClick={() => setIsOpen(false)}>FIT-OUT</Link></li>
          <li><Link to="/about" className="text-white hover:text-green-500 text-sm sm:text-base" onClick={() => setIsOpen(false)}>MAINTENANCE</Link></li>
          <li><Link to="/services" className="text-white hover:text-green-500 text-sm sm:text-base" onClick={() => setIsOpen(false)}>Cleaning</Link></li>
          <li><Link to="/contact" className="text-white hover:text-green-500 text-sm sm:text-base" onClick={() => setIsOpen(false)}>Real Estate</Link></li>
        </ul>

        {/* Social Icons - Right */}
        <div className="hidden md:flex gap-3 lg:gap-4 flex-shrink-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-lg">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-lg">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500 text-lg">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
