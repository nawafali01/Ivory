import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">About Us</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">IVORY is a leading company providing innovative solutions and services to our valued clients worldwide.</p>

            <div className="flex gap-3 flex-wrap pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-facebook text-sm sm:text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-instagram text-sm sm:text-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-youtube text-sm sm:text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-twitter text-sm sm:text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">About</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Services</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white text-sm sm:text-base hover:underline inline-block transition-transform hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
  <div>
  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">
    Contact Info
  </h3>

  <div className="space-y-2 text-sm sm:text-base">
    <p className="text-gray-300">
      Email:{" "}
      <a
        href="mailto:Ivoryjabbar@gmail.com"
        className="text-white hover:text-green-500 transition-colors"
      >
        Ivoryjabbar@gmail.com
      </a>
    </p>

    <p className="text-gray-300">
      Phone:{" "}
      {/* Remove spaces in the href for better compatibility with some dialers */}
      <a
        href="tel:+971544605759"
        className="text-white hover:text-green-500 transition-colors"
      >
        +971 54 460 5759
      </a>
    </p>

    <p className="text-gray-300">
      Address:{" "}
      <a
        href="https://www.google.com/maps/search/?api=1&query=Trio+Building+34+Street+Al+Barsha+1+Dubai+UAE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-colors"
      >
        Trio Building 34 Street Al Barsha 1, Dubai UAE
      </a>
    </p>
  </div>
</div>
          {/* Social Links */}
          {/* <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white border-b border-white pb-2">Follow Us</h3>
            <div className="flex gap-3 flex-wrap">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-facebook text-sm sm:text-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-instagram text-sm sm:text-lg"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-youtube text-sm sm:text-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 bg-white text-black rounded-full hover:bg-green-500 hover:scale-125 transition-all duration-300">
                <i className="fab fa-twitter text-sm sm:text-lg"></i>
              </a>
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col justify-center items-center gap-4 text-center sm:text-left">
          <p className="text-gray-400 text-center text-xs sm:text-sm">&copy; {currentYear} IVORY. All rights reserved.</p>
          {/* <div className="flex gap-4 sm:gap-6 justify-center flex-wrap text-xs sm:text-sm">
            <a href="#privacy" className="text-gray-300 hover:text-white hover:underline">Privacy Policy</a>
            <a href="#terms" className="text-gray-300 hover:text-white hover:underline">Terms of Service</a>
            <a href="#sitemap" className="text-gray-300 hover:text-white hover:underline">Sitemap</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
