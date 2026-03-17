import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">

          {/* About Us */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">About Us</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              I C G Technical Services LLC is a leading company providing innovative solutions and services to our valued clients worldwide.
            </p>
            <div className="flex gap-3 flex-wrap pt-4">

              <a href="https://www.facebook.com/people/ICG-Technical-Services-LLC/61583672746313/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-facebook text-sm sm:text-lg"></i>
              </a>

              <a href="https://www.instagram.com/icgtechnicalservices?igsh=OXpkem91b2ljYXc3&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-instagram text-sm sm:text-lg"></i>
              </a>

              <a href="https://www.tiktok.com/@icg.technical.serv?_r=1&_t=ZS-94i5n7rO02b" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-tiktok text-sm sm:text-lg"></i>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Home</Link></li>
              <li><Link to="/our-project" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Our Projects</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">Contact Info</h3>
            <div className="space-y-2 text-sm sm:text-base">
              <p className="text-gray-300">Email: <a href="mailto:Ivoryjabbar@gmail.com" className="text-white hover:text-green-500 transition-colors">Ivoryjabbar@gmail.com</a></p>
              <p className="text-gray-300">Phone: <a href="tel:+971544605759" className="text-white hover:text-green-500 transition-colors">+971 54 460 5759</a></p>
              <p className="text-gray-300">Address: <a href="https://www.google.com/maps/search/?api=1&query=Trio+Building+34+Street+Al+Barsha+1+Dubai+UAE" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">Trio Building 34 Street Al Barsha 1, Dubai UAE</a></p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            &copy; {currentYear} ICG Technical Services LLC. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer