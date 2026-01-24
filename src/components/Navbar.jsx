import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-black py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Logo - Left */}
        <div className="flex items-center gap-2">
          <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10 rounded" />
        
        </div>

        {/* Navigation - Center */}
        <ul className="flex list-none gap-8">
          <li><Link to="/" className="text-white hover:text-green-500">FIT-OUT</Link></li>
          <li><Link to="/about" className="text-white hover:text-green-500">MAINTENANCE</Link></li>
          <li><Link to="/services" className="text-white hover:text-green-500">Cleaning</Link></li>
          <li><Link to="/contact" className="text-white hover:text-green-500">Real Estate</Link></li>
        </ul>

        {/* Social Icons - Right */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
