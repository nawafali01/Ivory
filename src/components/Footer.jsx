import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black ">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-1 border-white pb-1">About Us</h3>
            <p className="text-gray-300 leading-relaxed">IVORY is a leading company providing innovative solutions and services to our valued clients worldwide.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-1 border-white pb-1">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#home" className="text-white hover:text-white hover:underline inline-block transition-transform hover:translate-x-1">Home</a></li>
              <li><a href="#about" className="text-white hover:text-white hover:underline inline-block transition-transform hover:translate-x-1">About</a></li>
              <li><a href="#services" className="text-white hover:text-white hover:underline inline-block transition-transform hover:translate-x-1">Services</a></li>
              <li><a href="#contact" className="text-white hover:text-white hover:underline inline-block transition-transform hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-1 border-white pb-1">Contact Info</h3>
            <p className="text-gray-300 mb-1">Email: <a href="mailto:info@ivory.com" className="text-white hover:text-white">info@ivory.com</a></p>
            <p className="text-gray-300 mb-1">Phone: <a href="tel:+1234567890" className="text-white hover:text-white">+1 (234) 567-890</a></p>
            <p className="text-gray-300">Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white border-b-1 border-white pb-1">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 bg-white text-black rounded-full hover:bg-white hover:scale-125 transition-all duration-300">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 bg-white text-black rounded-full hover:bg-white hover:scale-125 transition-all duration-300">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 bg-white text-black rounded-full hover:bg-white hover:scale-125 transition-all duration-300">
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-11 h-11 bg-white text-black rounded-full hover:bg-white hover:scale-125 transition-all duration-300">
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-sm">&copy; {currentYear} IVORY. All rights reserved.</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <a href="#privacy" className="text-white text-sm hover:text-white hover:underline">Privacy Policy</a>
            <a href="#terms" className="text-white text-sm hover:text-white hover:underline">Terms of Service</a>
            <a href="#sitemap" className="text-white text-sm hover:text-white hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
